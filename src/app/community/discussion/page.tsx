import { Metadata } from 'next';
import { Suspense } from 'react';

import Aside from '../components/Aside';
import AsideSkeleton from '../components/AsideSkeleton';

export const metadata: Metadata = {
  title: 'Discussion',
};

export default async function Page(
  props: Readonly<{
    searchParams: Promise<{
      search?: string;
      page?: string;
    }>;
  }>,
) {
  const searchParams = await props.searchParams;
  const search = searchParams.search || '';

  return (
    <>
      <main className='flex-1 space-y-5'>
        <h1>Discussion</h1>
      </main>
      <div className='max-lg:hidden'>
        <Suspense key={search} fallback={<AsideSkeleton />}>
          <Aside />
        </Suspense>
      </div>
    </>
  );
}
