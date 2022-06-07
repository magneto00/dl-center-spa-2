import React, { memo, useState, useRef } from 'react';
import xlsx from 'xlsx';

export const FileUpload = () => {
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const uploadInputRef = useRef();
  let allXlsxRows = 0;
  let proceededXlsxRows = 0;

  const saveSheetItems = async (currentWorkSheetContent, sheetName) => {
    for (let i = 0; i < currentWorkSheetContent.length; i++) {
      const currentItem = currentWorkSheetContent[i];

      await fetch(`${process.env.STRAPI_DOMAIN}/api/instructions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            deviceName: sheetName,
            defaultIFUlanguage: currentItem.defaultIFUlanguage,
            softwareVersion: currentItem.softwareVersion?.toString(),
            software: currentItem.software,
            country: currentItem.country,
            notes: currentItem.notes,
            link: currentItem.link,
            uniqueID: `${sheetName}-${currentItem.country}`,
          },
        }),
      }).then(() => {
        proceededXlsxRows++;
        if (proceededXlsxRows === allXlsxRows) {
          setUploadSuccess(true);
          setIsUploading(false);
          uploadInputRef.current.value = '';
        }
      });
    }
  };

  const handleUploadFile = async (e) => {
    e.preventDefault();
    uploadSuccess && setUploadSuccess(false);
    if (e.target.files) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: 'array' });
        const sheetNames = workbook.SheetNames;

        sheetNames.forEach((sheetName) => {
          const currentWorkSheet = workbook.Sheets[sheetName];
          const currentWorkSheetContent =
            xlsx.utils.sheet_to_json(currentWorkSheet);
          allXlsxRows = allXlsxRows + currentWorkSheetContent.length;
          saveSheetItems(currentWorkSheetContent, sheetName);
        });
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  return (
    <div style={{ padding: '20px 0' }}>
      <form>
        <label htmlFor="upload">Upload File</label>
        <input
          ref={uploadInputRef}
          type="file"
          name="upload"
          id="upload"
          onChange={handleUploadFile}
        />
      </form>
      <div style={{ padding: '10px 0' }}>
        {isUploading && <p>Uploading in progress....</p>}
        {uploadSuccess && (
          <p style={{ color: 'green' }}>Upload finished successfully!</p>
        )}
      </div>
    </div>
  );
};

export default memo(FileUpload);
