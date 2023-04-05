import axios from 'axios';
import * as React from 'react';
import { GetServerSideProps } from 'next';

import Seo from '@/components/Seo';
import ContentSection from '@/components/ContentSection';

import { CatsResponse } from '@/types/CatsResponse';

type SSRPageProps = {
  imgUrl: string;
};

export default function SSRPage({ imgUrl }: SSRPageProps) {
  return (
    <>
      <Seo templateTitle='SSR' />

      <main>
        <ContentSection
          title='SSR'
          description='Fetched every render, on server side.'
          imgShortUrl={imgUrl}
        />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get<CatsResponse>('https://cataas.com/cat?json=true');

  return {
    props: { imgUrl: res.data.url },
  };
};
