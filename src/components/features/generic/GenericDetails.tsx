import { Box, Container, Flex, Grid, GridItem, Heading, Text, useTheme } from '@chakra-ui/react';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

import { GenericContentFieldsFragment } from '@src/lib/__generated/sdk';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


export const GenericDetails = ({
  title,
  contents,
  sys: { id: entryId },
}: GenericContentFieldsFragment) => {
  const theme = useTheme();
  const inspectorProps = useContentfulInspectorMode({ entryId });

  return (
    <Container mt={{ base: 6, lg: 16 }}>
      <Grid templateColumns="repeat(12, 1fr)" gap={{ base: 5, lg: 12 }}>
        <GridItem colSpan={{ base: 12, lg: 5, xl: 4 }}>
          <Box
            width="100%"
            bg={theme.f36.gray100}
            mb="auto"
            borderRadius={4}
            px={{ base: 4, lg: 6 }}
            pt={{ base: 6, lg: 6 }}
            pb={{ base: 8, lg: 14 }}>
            <Heading {...inspectorProps({ fieldId: 'title' })} as="h1" variant="h3">
              {title}
            </Heading>
            <div dangerouslySetInnerHTML={{__html: documentToHtmlString(contents?.json)}}></div>

          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};
