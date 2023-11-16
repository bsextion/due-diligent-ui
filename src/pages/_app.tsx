import { AuthModalContext, AuthModalType } from '@/common/constants/AuthModalContext';
import Navbar from '@/components/Navbar/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import React
 from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [type, setType] = useState<AuthModalType['type']>('login');
  const [isOpen, setIsOpen] = useState(true);

  const toggleType = (type: AuthModalType['type']) => {
    setType((prev) => type)
    console.log('type ', type)
  };
  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const authInitialState: AuthModalType = {
    type,
    isOpen,
    toggleType,
    toggleOpen,
  };


  return (
      <AuthModalContext.Provider value={authInitialState}>
        <Head>
          <title>Due-Diligent</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/icon.png' />
          <meta
            name='description'
            content='Web application that tracks users bills and shows reminders when bills are due.'
          />
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </AuthModalContext.Provider>
  );
}
