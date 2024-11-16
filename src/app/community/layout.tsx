import React from 'react';

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
          <Search placeholder='Search' />
        </div>
      </header>
      <div className='container mx-auto flex gap-5 p-5'>
        <aside className='w-36' />
        {children}
      </div>
      <footer className='container mx-auto px-5'>
        <h1>Footer</h1>
      </footer>
    </main>
  );
}
