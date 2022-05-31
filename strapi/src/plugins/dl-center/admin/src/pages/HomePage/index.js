import React, { memo } from 'react';
import { Box } from '@strapi/design-system/Box';
import { Flex } from '@strapi/design-system/Flex';
import { Status } from '@strapi/design-system/Status';
import { Typography } from '@strapi/design-system/Typography';
import { BaseHeaderLayout, ContentLayout } from '@strapi/design-system/Layout';
import FileUploadForm from '../../components/FileUploadForm';

function HomePage() {
  return (
    <>
      <BaseHeaderLayout
        title="DL Center"
        subtitle="Here you can upload your file with instructions."
        as="h2"
      />
      <ContentLayout>
        <Box background="neutral0" hasRadius shadow="filterShadow">
          <Flex
            justifyContent="start"
            direction="column"
            alignItems="stretch"
            padding={2}
          >
            <Box padding={2}>
              <Typography variant="alpha">Upload instructions file</Typography>
            </Box>
            <Box padding={2}>
              <Status>The file needs to have a proper structure.</Status>
            </Box>
            <Box padding={2}>
              <Status>
                All data will be deleted and replaced with the new one.
              </Status>
            </Box>
            <Box padding={2}>
              <FileUploadForm />
            </Box>
          </Flex>
        </Box>
      </ContentLayout>
    </>
  );
}

export default memo(HomePage);
