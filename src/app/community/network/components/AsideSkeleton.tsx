import { Skeleton } from '@mui/material';

export default function Aside() {
  return (
    <div className='space-y-5'>
      <p>People Suggestion</p>
      <div className='flex gap-4'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className='flex w-20 flex-1 flex-col gap-1'>
            <div className='aspect-square'>
              <Skeleton
                animation='wave'
                variant='circular'
                height='100%'
                width='100%'
              />
            </div>
            <Skeleton animation='wave' variant='text' width='100%' />
            <Skeleton
              animation='wave'
              variant='rectangular'
              width='100%'
              height={30}
              className='rounded-full'
            />
          </div>
        ))}
      </div>
      <p>Company Suggestion</p>
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index}>
          <div className='mb-2 flex items-center justify-between'>
            <Skeleton animation='wave' variant='text' width='20%' height={20} />
            <Skeleton
              animation='wave'
              variant='rectangular'
              width={80}
              height={25}
              className='rounded-full'
            />
          </div>
          <div className='aspect-video'>
            <Skeleton
              animation='wave'
              variant='rectangular'
              width='100%'
              height='100%'
              className='rounded-md'
            />
          </div>
        </div>
      ))}
    </div>
  );
}
