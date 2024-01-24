import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import MobileLogo from '@icons/starbien-mobile.svg';
import DesktopLogo from '@icons/starbien.svg';
import { LanguageSelector } from '@src/components/features/language-selector';

export const HEADER_HEIGHT = 60;

export const Header = (props: BoxProps) => {
  const { t } = useTranslation();

  return (
    <Flex
      as="nav"
      justifyContent="space-between"
      align="center"
      pl={{ base: 4, md: 12, lg: 12 }}
      pr={{ base: 4, md: 12, lg: 12 }}
      height={`${HEADER_HEIGHT}px`}
      zIndex="2"
      {...props}>
      <Link href="/" title={t('common.homepage')}>
        <Box
          h='40px'
          display={{ base: 'none', md: 'block', lg: 'block' }}
          as={DesktopLogo}
          title={t('common.logoImageAltText')}
        />
        <Box
          h='30px'
          display={{ base: 'block', md: 'none', lg: 'none' }}
          as={MobileLogo}
          title={t('common.logoImageAltText')}
        />
      </Link>
      <Link href="/generic/prueba">{t('common.terms_and_conditions')}
      </Link>
      <LanguageSelector />
    </Flex>
  );
};
