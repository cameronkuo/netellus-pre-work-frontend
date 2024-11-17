import { loremIpsum } from 'lorem-ipsum';

import dayjs from '@/lib/dayjs';

import PostCard from './PostCard';

export default async function Posts() {
  const list = await new Promise<Array<Parameters<typeof PostCard>[0]>>(
    resolve => {
      setTimeout(() => {
        resolve(
          Array.from({ length: 10 }).map((_, index) => ({
            user: {
              id: Math.random().toString(36).slice(2),
              avatar: `https://picsum.photos/100?random=${index}`,
              name: loremIpsum({ count: 2, units: 'words' }),
            },
            createdAt: dayjs()
              .subtract(Math.random() * 1000, 'minute')
              .toISOString(),
            content: loremIpsum({ count: 1, units: 'paragraphs' }),
            commentCount: Math.floor(Math.random() * 100),
            shareCount: Math.floor(Math.random() * 100),
            likeCount: Math.floor(Math.random() * 100),
            liked: Math.random() < 0.5,
            saved: Math.random() < 0.5,
          })),
        );
      }, 1000);
    },
  );

  return (
    <>
      {list.map((item, index) => (
        <PostCard key={index} {...item} />
      ))}
    </>
  );
}
