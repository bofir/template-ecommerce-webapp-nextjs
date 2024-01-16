import {
  Text,
  Select,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { ListBulletedIcon } from '@contentful/f36-icons';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export const PageSelectorMobile = ({ genericPages }) => {
  const router = useRouter();
  const { t } = useTranslation();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef<HTMLSelectElement | null>(null);

  return (
    <>
      <Button variant="unstyled" onClick={onOpen}>
        <ListBulletedIcon width="18px" height="18px" variant="secondary" />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement="right" initialFocusRef={firstField}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize={20}>{t('common.institutionalPages')}</DrawerHeader>

          <DrawerBody>
            <Select
              size="md"
              mt={2}
              ref={firstField}
              onChange={event => {
                router.push('/generic/' + event.target.value);
                onClose();
              }}>
              <option key='' value=''>{t('common.select')}</option>
              {genericPages?.map(page => (
                <option key={page[0]} value={page[0]}>
                  {page[1]}
                </option>
              ))}
            </Select>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
