'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { QrReader } from 'react-qr-reader';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState('No result');
  const [isReady, setIsReady] = useState(true);

  const handleScan = (result: any, error: any) => {
    if (!isReady) {
      console.log('not ready');
      return;
    }
    if (!!result && result.text) {
      setIsReady(false);
      console.log(result);

      navigator.clipboard.writeText(result?.text);
      setData('Copied to clipboard!');
      setTimeout(() => {
        setData('No result');
        setIsReady(true);
      }, 2000);
    }

    if (!!error) {
      console.info(error);
    }
  };

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
        onResult={handleScan}
        containerStyle={{ width: '400px' }}
        constraints={{ facingMode: 'environment' }}
      />
      <p
        style={{
          fontSize: '1.5rem',
          maxWidth: '400px',
          wordWrap: 'break-word',
        }}
      >
        {data}
      </p>
    </main>
  );
}
