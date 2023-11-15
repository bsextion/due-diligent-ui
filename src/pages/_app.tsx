import {
  AuthModalContext, AuthModalState,
} from '@/common/constants/types/AuthModalContext';
import Navbar from '@/components/Navbar/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [type, setType] = useState<'login' | 'register' | 'reset'>('login');
  const [isOpen, setIsOpen] = useState(true);

  const toggleType = () => { }
  const toggleOpen = () => {setIsOpen(prev => !prev)};
   
      const authInitialState: AuthModalState = {
        type,
        isOpen,
        toggleType,
        toggleOpen,
      };
     
  return (
    <>
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
    </>
  );
}
