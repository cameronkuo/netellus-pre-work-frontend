import Divider from '@mui/material/Divider';
import React, { Suspense } from 'react';

import dayjs from '@/lib/dayjs';

import Navigation from './components/Navigation';
import Search from './components/Search';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Netellus Community',
    default: 'Netellus Community',
  },
  description: '',
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <header className='sticky top-0 z-50 bg-background shadow'>
        <div className='container mx-auto flex items-center gap-5 px-5'>
          <h1>Netellus</h1>
          <Navigation />
          <Suspense>
            <Search placeholder='Search' />
          </Suspense>
        </div>
      </header>
      <div className='container mx-auto flex p-5 pl-40'>{children}</div>
      <footer className='container mx-auto p-5 text-sm'>
        <Divider>
          Copyright&nbsp;
          <sup>
            <small>&copy;</small>
          </sup>
          &nbsp;
          {dayjs().format('YYYY')} Netellus
        </Divider>
      </footer>
    </main>
  );
}
