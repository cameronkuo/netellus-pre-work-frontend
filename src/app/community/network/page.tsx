import { Metadata } from 'next';
import { Suspense } from 'react';

import Aside from './components/Aside';
import AsideSkeleton from './components/AsideSkeleton';
import PostCardSkeleton from './components/PostCardSkeleton';
import Posts from './components/Posts';

export const metadata: Metadata = {
  title: 'Network',
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
    <main className='flex flex-1 gap-10'>
      <section className='flex-1 space-y-5'>
        <div className='grid grid-cols-2 gap-5'>
          <button className='rounded-full bg-gray-100 p-2 text-gray-800'>
            Following
          </button>
          <button className='rounded-full bg-gray-100 p-2 text-gray-800'>
            Explore
          </button>
        </div>
        <Suspense
          key={search}
          fallback={Array.from({ length: 10 }).map((_, index) => (
            <PostCardSkeleton key={index} />
          ))}
        >
          <Posts />
        </Suspense>
      </section>
      <aside className='max-lg:hidden'>
        <Suspense key={search} fallback={<AsideSkeleton />}>
          <Aside />
        </Suspense>
      </aside>
    </main>
  );
}
