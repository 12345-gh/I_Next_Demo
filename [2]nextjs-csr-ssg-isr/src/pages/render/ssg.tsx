import axios from 'axios';
import * as React from 'react';
import { GetStaticProps } from 'next';

import Seo from '@/components/Seo';
import ContentSection from '@/components/ContentSection';

import { CatsResponse } from '@/types/CatsResponse';

type SSGPageProps = {
  imgUrl: string;
};

export default function SSGPage({ imgUrl }: SSGPageProps) {
  return (
    <>
      <Seo templateTitle='SSG' />

      <main>
        <ContentSection
          title='SSG'
          description='Fetched only once, when running yarn build on deployment.'
          imgShortUrl={imgUrl}
        />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get<CatsResponse>('https://cataas.com/cat?json=true');

  return {
    props: { imgUrl: res.data.url },
  };
};
