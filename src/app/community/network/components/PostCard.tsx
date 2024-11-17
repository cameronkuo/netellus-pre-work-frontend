'use client';

import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
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
      <div />
      <div className='flex gap-5'>
        <button className='flex items-center gap-1'>
          <ModeCommentOutlinedIcon fontSize='small' />
          {props.commentCount}
        </button>
        <button className='flex items-center gap-1'>
          {props.liked ? (
            <FavoriteOutlinedIcon fontSize='small' />
          ) : (
            <FavoriteBorderOutlinedIcon fontSize='small' />
          )}
          {props.likeCount}
        </button>
        <button className='flex items-center gap-1'>
          <BarChartOutlinedIcon fontSize='small' />
          66K
        </button>
        <button className='ml-auto flex items-center gap-1'>
          {props.saved ? (
            <BookmarkOutlinedIcon fontSize='small' />
          ) : (
            <BookmarkBorderOutlinedIcon fontSize='small' />
          )}
        </button>
        <button className='mb-1 flex -rotate-45 items-center gap-1'>
          <SendOutlinedIcon fontSize='small' />
        </button>
      </div>
      <div />
      <hr className='mb-5 mt-3' />
    </div>
  );
}
