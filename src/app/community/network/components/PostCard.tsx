'use client';

import React from 'react';

import dayjs from '@/lib/dayjs';

function Content(props: { content: string }) {
  const [collapse, setCollapse] = React.useState(props.content.length > 200);

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div className='text-sm'>
      <p className={`overflow-hidden ${collapse ? 'line-clamp-3' : ''}`}>
        {props.content}
      </p>
      {collapse && (
        <button className='ml-auto block' onClick={() => toggleCollapse()}>
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
  commentCount: number;
  shareCount: number;
  likeCount: number;
  liked: boolean;
  saved: boolean;
}) {
  return (
    <div className='grid grid-cols-[auto_1fr] items-center gap-3'>
      <img
        className='h-10 w-10 rounded-full'
        src={props.user.avatar}
        alt={props.user.name}
      />
      <div>
        <div className='font-medium'>{props.user.name}</div>
        <time className='text-sm opacity-60'>
          {dayjs(props.createdAt).fromNow()}
        </time>
      </div>
      <div />
      <div className='text-sm'>
        <Content content={props.content} />
      </div>
    </div>
  );
}
