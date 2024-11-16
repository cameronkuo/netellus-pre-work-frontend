export default async function Aside() {
  await new Promise(resolve => setTimeout(resolve, 5000));
  return (
    <div className='space-y-5'>
      <p>People Suggestion</p>
      <div className='flex gap-4'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className='flex w-20 flex-1 flex-col gap-1'>
            <div className='aspect-square'>
              <div
                className='rounded-full bg-foreground'
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className='rounded' style={{ width: '100%' }}>
              Justin Wu
            </div>
            <button
              className='rounded-full border-none p-2'
              style={{ width: '100%' }}
            >
              Follow
            </button>
          </div>
        ))}
      </div>
      <p>Company Suggestion</p>
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index}>
          <div className='mb-2 flex items-center justify-between'>
            <div className='rounded' style={{ width: '20%', height: 20 }}>
              Google
            </div>
            <button className='block rounded-full border-none px-5 py-1'>
              Follow
            </button>
          </div>
          <div className='aspect-video'>
            <div
              className='rounded-md bg-foreground'
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
