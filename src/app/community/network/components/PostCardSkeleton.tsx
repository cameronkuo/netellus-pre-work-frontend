import Skeleton from '@mui/material/Skeleton';
import React from 'react';

export default function PostCardSkeleton() {
  return (
    <div className='grid grid-cols-[auto_1fr] items-center gap-3'>
      <div className='h-10 w-10'>
        <Skeleton
          animation='wave'
          variant='circular'
          height='100%'
          width='100%'
        />
      </div>
      <div>
        <Skeleton animation='wave' variant='text' width={100} />
        <Skeleton animation='wave' variant='text' width={50} />
      </div>
      <div />
      <div className='text-sm'>
        <Skeleton animation='wave' variant='text' width='100%' />
        <Skeleton animation='wave' variant='text' width='100%' />
        <Skeleton animation='wave' variant='text' width='50%' />
        <div className='h-4' />
        <button className='ml-auto block'>...more</button>
      </div>
    </div>
  );
}
