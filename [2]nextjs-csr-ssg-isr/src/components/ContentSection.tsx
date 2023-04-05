import Image from 'next/image';
import * as React from 'react';

import useRealTime from '@/hooks/useRealTime';

import ButtonLink from './links/ButtonLink';

type TimeSectionProps = {
  imgShortUrl: string | undefined;
  title: string;
  description: string;
};

export default function ContentSection({
  imgShortUrl,
  title,
  description,
}: TimeSectionProps) {
  const imgFullUrl = imgShortUrl
    ? `https://cataas.com${imgShortUrl}`
    : undefined;

  const realTime = useRealTime();

  return (
    <section className='bg-dark'>
      <div className='flex flex-col items-center justify-center min-h-screen text-center text-white layout'>
        <h1>{title}</h1>
        <p className='mt-2 text-gray-300'>{description}</p>
        <h2 className='mt-8 text-5xl md:text-6xl text-primary-400'>
          {imgFullUrl ? (
            <Image src={imgFullUrl} alt='cat image' width={350} height={350} />
          ) : (
            'LOADING...'
          )}
        </h2>
        <ButtonLink className='mt-8' href='/'>
          Back to Home
        </ButtonLink>

        <footer className='absolute text-sm font-medium text-right right-4 bottom-8 sm:bottom-4'>
          <p className='text-white'>Real Time:</p>
          <p className='text-primary-400'>{realTime}</p>
        </footer>
      </div>
    </section>
  );
}
