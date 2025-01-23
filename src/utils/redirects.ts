import type { NextConfig } from 'next';

const redirects: NextConfig['redirects'] = async () => [
  {
    source: '/community',
    destination: '/community/network',
    permanent: true,
  },
];

export default redirects;
