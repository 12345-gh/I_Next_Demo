import * as React from 'react';
import axios from 'axios';

import Seo from '@/components/Seo';
import ContentSection from '@/components/ContentSection';

import { CatsResponse } from '@/types/CatsResponse';

export default function CSRPage() {
  const [imgUrl, setImgUrl] = React.useState<string>();

  React.useEffect(() => {
    axios
      .get<CatsResponse>('https://cataas.com/cat?json=true')
      .then((res) => {
        setImgUrl(res.data.url);
        return res.data.url;
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Seo templateTitle='CSR' />

      <main>
        <ContentSection
          title='CSR'
          description='Fetched every render, on client side. Notice the loading.'
          imgShortUrl={imgUrl}
        />
      </main>
    </>
  );
}
