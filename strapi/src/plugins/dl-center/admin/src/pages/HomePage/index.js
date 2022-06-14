import React, { memo } from 'react';
import { Box } from '@strapi/design-system/Box';
import { Flex } from '@strapi/design-system/Flex';
import { Status } from '@strapi/design-system/Status';
import { Typography } from '@strapi/design-system/Typography';
import { Grid, GridItem } from '@strapi/design-system/Grid';
import { BaseHeaderLayout, ContentLayout } from '@strapi/design-system/Layout';
import { FileUploadForm } from '../../components/FileUploadForm/FileUploadForm';

function HomePage() {
  return (
    <Grid>
      <GridItem padding={1} col={9} s={12}>
        <BaseHeaderLayout
          title="DL Center"
          subtitle="Here you can upload your file with instructions."
          as="h1"
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
                <Typography variant="beta">Upload instructions file</Typography>
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
      </GridItem>
    </Grid>
  );
}

export default memo(HomePage);
