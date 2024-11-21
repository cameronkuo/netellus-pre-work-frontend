export default async function Aside() {
  await new Promise(resolve => setTimeout(resolve, 5000));
  return (
    <div className='space-y-5'>
      <p>People Suggestion</p>
      <div className='grid grid-cols-3 gap-4'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className='flex w-20 flex-col gap-1 text-center'>
            <div className='aspect-square'>
              <div className='h-full w-full rounded-full bg-foreground' />
            </div>
            <p>Justin Wu</p>
            <button className='text rounded-full border border-foreground py-1'>
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
            <button className='text rounded-full border border-foreground px-5 py-1'>
              Follow
            </button>
          </div>
          <div className='aspect-video'>
            <div className='h-full w-full rounded-md bg-foreground' />
          </div>
        </div>
      ))}
    </div>
  );
}
