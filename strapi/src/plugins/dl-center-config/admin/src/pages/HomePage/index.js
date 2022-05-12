import React, { memo } from 'react';
import FileUpload from '../../components/FileUpload/FileUpload';

const HomePage = () => {
  return (
    <div style={{ padding: '20%' }}>
      <FileUpload />
      <div>
        <p>
          Every single row has an uniqueID field which consists of two fields
          from xlxs file: DeviceName + CountryName
        </p>
      </div>
    </div>
  );
};

export default memo(HomePage);
