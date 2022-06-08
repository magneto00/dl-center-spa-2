import React, { memo, useState } from 'react';
import xlsx from 'xlsx';
import { Box } from '@strapi/design-system/Box';
import { Typography } from '@strapi/design-system/Typography';
import { Alert } from '@strapi/design-system/Alert';
import { Form } from './Form';
import api from '../../api/api';
import { FetchStatus } from '../../api/types';

const ALLOWED_EXTENSIONS = [
  'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];

function getSheetsFromFile(file) {
  return new Promise((res) => {
    const reader = new FileReader();

    reader.onload = async ({ target }) => {
      const workbook = xlsx.read(target.result, { type: 'array' });
      const sheetNames = workbook.SheetNames;

      const data = sheetNames.map((sheetName) => {
        const currentWorkSheet = workbook.Sheets[sheetName];
        return {
          sheetName,
          content: xlsx.utils.sheet_to_json(currentWorkSheet),
        };
      });

      res(data);
    };
    reader.readAsArrayBuffer(file);
  });
}

function getInstructionsFromSheets(sheets) {
  const data = sheets.map(({ sheetName, content }) => {
    return content.map((row) => {
      return {
        device: sheetName,
        language: row.defaultIFUlanguage,
        version: row.softwareVersion,
        software: row.software,
        country: row.country,
        notes: row.notes,
        link: row.link,
        // TODO - there is an assumption that country is unique
        uid: `${sheetName}-${row.country}`,
      };
    });
  });
  return data.flat();
}

function Component() {
  const [status, setStatus] = useState(FetchStatus.IDLE);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  function handleChange(event) {
    setError(null);
    setFile(null);

    if (event.target.files.length) {
      const inputFile = event.target.files[0];

      const fileExtension = inputFile?.type.split('/')[1];
      if (!ALLOWED_EXTENSIONS.includes(fileExtension)) {
        setError('Please upload the .xlsx file.');
        return;
      }

      setFile(inputFile);
    }
  }

  function handleCloseError() {
    setError(null);
  }

  function handleCloseSuccess() {
    setStatus(FetchStatus.IDLE);
  }

  async function handleSubmit(event) {
    try {
      setStatus(FetchStatus.PENDING);
      event.preventDefault();

      const sheets = await getSheetsFromFile(file);
      const data = getInstructionsFromSheets(sheets);

      await api.deleteAllInstructions();
      await api.createInstructions(data);

      setStatus(FetchStatus.RESOLVED);
    } catch (e) {
      setStatus(FetchStatus.REJECTED);
      setError(e.message);
    }
  }

  const isButtonDisabled = !!error || !file;

  return (
    <Box padding={2}>
      <Typography variant="delta">Upload File</Typography>
      {error && (
        <Box paddingTop={2}>
          <Alert
            title="Error!"
            variant="danger"
            onClose={() => {
              handleCloseError();
            }}
            closeLabel="Close"
          >
            {error}
          </Alert>
        </Box>
      )}
      <Box paddingTop={2}>
        <Form
          status={status}
          isButtonDisabled={isButtonDisabled}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleCloseSuccess={handleCloseSuccess}
        />
      </Box>
    </Box>
  );
}

export const FileUploadForm = memo(Component);
