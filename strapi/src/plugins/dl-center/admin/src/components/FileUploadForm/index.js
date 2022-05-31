import React, { memo, useState, useRef } from 'react';
import xlsx from 'xlsx';
import { Box } from '@strapi/design-system/Box';
import { Typography } from '@strapi/design-system/Typography';
import { Button } from '@strapi/design-system/Button';
import { Flex } from '@strapi/design-system/Flex';

// export type FetchStatus = 'idle' | 'pending' | 'rejected' | 'resolved';

function FileUploadForm() {
  const [status, setStatus] = useState('idle');
  const uploadInputRef = useRef();
  let allXlsxRows = 0;
  let proceededXlsxRows = 0;

  async function uploadSheet(currentWorkSheetContent, sheetName) {}

  const handleUploadFile = async (e) => {
    e.preventDefault();

    if (e.target.files) {
      setStatus('pending');

      const reader = new FileReader();
      reader.onload = (fr) => {
        const data = fr.target.result;
        const workbook = xlsx.read(data, { type: 'array' });
        const sheetNames = workbook.SheetNames;

        sheetNames.forEach((sheetName) => {
          const currentWorkSheet = workbook.Sheets[sheetName];
          const sheetJSON = xlsx.utils.sheet_to_json(currentWorkSheet);
          allXlsxRows += sheetJSON.length;
          uploadSheet(sheetJSON, sheetName);
        });
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  return (
    <Box padding={2}>
      <Typography variant="delta">Upload File</Typography>
      <Box padding={2}>
        <form>
          <input
            ref={uploadInputRef}
            type="file"
            name="upload"
            id="upload"
            onChange={handleUploadFile}
          />
        </form>
      </Box>
      <Flex justifyContent="flex-end">
        <Button variant="danger">Update data ⚡</Button>
      </Flex>
      <Typography variant="delta">{status}</Typography>
    </Box>
  );
}

export default memo(FileUploadForm);
