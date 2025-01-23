import redirects from '@/utils/redirects';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  redirects,
};

export default nextConfig;
