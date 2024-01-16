import { Box } from '@chakra-ui/react';

import { PageSelectorDesktop } from './PageSelectorDesktop';
import { PageSelectorMobile } from './PageSelectorMobile';

export const PageSelector = () => {

  const genericPages = ['prueba', 'otro', 'otra-cosa'];

  return genericPages && genericPages.length > 1 ? (
    <>
      <Box display={{ base: 'none', md: 'block', lg: 'block' }}>
        <PageSelectorDesktop genericPages={genericPages}  />
      </Box>

      <Box display={{ base: 'block', md: 'none', lg: 'none' }}>
        <PageSelectorMobile genericPages={genericPages} />
      </Box>
    </>
  ) : null;
};
