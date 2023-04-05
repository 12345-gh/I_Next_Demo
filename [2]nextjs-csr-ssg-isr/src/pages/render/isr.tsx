import axios from 'axios';
import * as React from 'react';
import { GetStaticProps } from 'next';

import Seo from '@/components/Seo';
import ContentSection from '@/components/ContentSection';

import { CatsResponse } from '@/types/CatsResponse';

type ISRPageProps = {
  imgUrl: string;
};

export default function ISRPage({ imgUrl }: ISRPageProps) {
  return (
    <>
      <Seo templateTitle='ISR' />

      <main>
        <ContentSection
          title='ISR'
          description='If you visit after the revalidate cat image (5s), your next full refresh visit will trigger fetch.'
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
    revalidate: 5,
  };
};
