'use client';

import { Box, Tab, Tabs } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  const tabs = [
    { label: 'Network', path: '/community/network' },
    { label: 'Discussion', path: '/community/discussion' },
  ];

  const value = tabs.findIndex(tab => tab.path === pathname);

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
