import { Box } from '@chakra-ui/react';
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useTranslation } from 'next-i18next';

import { GenericDetails } from '@src/components/features/generic';
import { SeoFields } from '@src/components/features/seo';
import { client, previewClient } from '@src/lib/client';
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations';

const Page = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { t } = useTranslation();
  const generic = useContentfulLiveUpdates(props.generic);

  return (
    <>
      {generic.seoFields && <SeoFields {...generic.seoFields} />}
      <GenericDetails {...generic} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params, locale, preview }) => {
  if (!params?.slug || !locale) {
    return {
      notFound: true,
    };
  }

  const gqlClient = preview ? previewClient : client;

  try {
    const data = await gqlClient.genericContent({ slug: params.slug.toString(), locale, preview });
    const generic = data.genericContentCollection?.items[0];

    if (!generic) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        ...(await getServerSideTranslations(locale)),
        generic,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default Page;
