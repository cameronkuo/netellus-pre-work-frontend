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
