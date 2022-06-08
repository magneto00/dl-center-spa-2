import React from 'react';
import { Button } from '@strapi/design-system/Button';
import { Flex } from '@strapi/design-system/Flex';
import { Alert } from '@strapi/design-system/Alert';
import { Loader } from '@strapi/design-system/Loader';
import { FetchStatus } from '../../api/types';

export function Form({
  isButtonDisabled,
  status,
  handleChange,
  handleSubmit,
  handleCloseSuccess,
}) {
  if (status === FetchStatus.PENDING) {
    return <Loader>Uploading instructions...</Loader>;
  }
  if (status === FetchStatus.RESOLVED) {
    return (
      <Alert
        title="Operation done"
        variant="success"
        onClose={() => {
          handleCloseSuccess();
        }}
        closeLabel="Close"
      >
        Instructions were uploaded successfully!
      </Alert>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="upload" id="upload" onChange={handleChange} />
      <Flex justifyContent="flex-end">
        <Button disabled={isButtonDisabled} variant="danger" type="submit">
          Update data ⚡
        </Button>
      </Flex>
    </form>
  );
}
