'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { QrReader } from 'react-qr-reader';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState('No result');

  return (
    <main
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            console.log(result);
            setData((result as any)?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        containerStyle={{ width: '400px' }}
        constraints={{}}
      />
      <p>{data}</p>
    </main>
  );
}
