'use client';

import React from 'react';

import dayjs from '@/lib/dayjs';

function Content(props: { content: string }) {
  const [collapse, setCollapse] = React.useState(props.content.length > 200);

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div className='text-sm text-foreground'>
      <p className={`overflow-hidden ${collapse ? 'line-clamp-3' : ''} mt-0`}>
        {props.content}
      </p>
      {collapse && (
        <button
          className='ml-auto block border-none bg-transparent text-foreground'
          onClick={() => toggleCollapse()}
        >
          ...more
        </button>
      )}
    </div>
  );
}

export default function PostCard(props: {
  user: {
    id: string;
    avatar: string;
    name: string;
  };
  createdAt: string;
  content: string;
}) {
  return (
    <div className='grid grid-cols-[auto_1fr] items-center gap-3'>
      <img
        className='h-10 w-10 rounded-full'
        src={props.user.avatar}
        alt={props.user.name}
      />
      <div>
        <div className='font-medium text-foreground'>{props.user.name}</div>
        <time className='text-sm text-foreground opacity-60'>
          {dayjs(props.createdAt).fromNow()}
        </time>
      </div>
      <div />
      <div className='text-sm text-foreground'>
        <Content content={props.content} />
      </div>
    </div>
  );
}
