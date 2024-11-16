'use client';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  const tabs = [
    { label: 'Network', path: '/community/network' },
    { label: 'Discussion', path: '/community/discussion' },
  ];

  const value = Math.max(
    tabs.findIndex(tab => pathname.startsWith(tab.path)),
    0,
  );

  return (
    <nav>
      <Box>
        <Tabs
          value={value}
          onChange={(event, newValue) => {
            router.push(tabs[newValue].path);
          }}
        >
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </Tabs>
      </Box>
    </nav>
  );
}
