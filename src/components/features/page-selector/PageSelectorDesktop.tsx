import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  Button,
  MenuOptionGroup,
} from '@chakra-ui/react';
import { ListBulletedIcon, ChevronDownTrimmedIcon, ChevronUpTrimmedIcon } from '@contentful/f36-icons';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export const PageSelectorDesktop = ({ genericPages  }) => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Flex justifyContent="center" alignItems="center">
      <ListBulletedIcon width="18px" height="18px" variant="secondary" />
      <Menu gutter={0}>
        {({ isOpen }) => (
          <>
            <MenuButton
              pr={1}
              pl={1}
              textTransform="uppercase"
              fontWeight={400}
              background="transparent"
              _hover={{ bg: 'transparent' }}
              _expanded={{ bg: 'transparent' }}
              _focus={{ bg: 'transparent' }}
              isActive={isOpen}
              as={Button}
              rightIcon={
                isOpen ? (
                  <ChevronUpTrimmedIcon variant="secondary" />
                ) : (
                  <ChevronDownTrimmedIcon variant="secondary" />
                )
              }>
              {t('common.institutionalPages')}
            </MenuButton>
            <MenuList minW={24} p={0}>
              <MenuOptionGroup
                onChange={value => {
                  if (value === '') {}
                  else {
                    router.push('/generic/' + value);
                  }
                }}>
                {genericPages?.map(page =>
                    <MenuItemOption
                      minW={24}
                      textAlign="left"
                      _focus={{ boxShadow: 'none' }}
                      _focusVisible={{ boxShadow: 'outline' }}
                      _hover={{ bg: 'transparent', boxShadow: 'none' }}
                      icon={null}
                      key={page}
                      value={page}>
                      {page}
                    </MenuItemOption>
                )}
              </MenuOptionGroup>
            </MenuList>
          </>
        )}
      </Menu>
    </Flex>
  );
};
