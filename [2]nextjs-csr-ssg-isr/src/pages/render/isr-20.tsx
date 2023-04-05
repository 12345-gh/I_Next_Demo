import axios from 'axios';
import * as React from 'react';
import { GetStaticProps } from 'next';

import Seo from '@/components/Seo';
import ContentSection from '@/components/ContentSection';

import { CatsResponse } from '@/types/CatsResponse';

type ISR20PageProps = {
  imgUrl: string;
};

export default function ISR20Page({ imgUrl }: ISR20PageProps) {
  return (
    <>
      <Seo templateTitle='ISR20' />

      <main>
        <ContentSection
          title='ISR20'
          description='If you visit after the revalidate cat image (20s), your next full refresh visit will trigger fetch.'
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
    revalidate: 20,
  };
};
