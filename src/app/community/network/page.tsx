import { Metadata } from 'next';
import { Suspense } from 'react';

import Aside from './components/Aside';
import AsideSkeleton from './components/AsideSkeleton';

export const metadata: Metadata = {
  title: 'Network',
};

export default function Page() {
  return (
    <main className='flex h-screen flex-1 gap-5'>
      <section className='h-40 flex-1'>
        <h1>Network</h1>
      </section>
      <aside className='max-lg:hidden'>
        <Suspense fallback={<AsideSkeleton />}>
          <Aside />
        </Suspense>
      </aside>
    </main>
  );
}
