'use client';

import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

import AuthModal from '@/components/AuthModal';
import RegisterModal from '@/components/RegisterModal';

export default function Home() {
  const [shouldShowAuthModal, setShouldShowAuthModal] = React.useState(false);
  const [shouldShowRegisterModal, setShouldShowRegisterModal] =
    React.useState(false);

  const navLinks = [
    { href: '/our-story', label: 'Our Story' },
    { href: '/membership', label: 'Membership' },
    {
      href: 'sign-up',
      label: 'Sign Up',
      onClick: () => setShouldShowRegisterModal(true),
    },
    {
      href: 'get-started',
      label: 'Get Started',
      isButton: true,
      onClick: () => setShouldShowAuthModal(true),
    },
  ];

  const footerLinks = [
    { href: '/about', label: 'About' },
    { href: '/press', label: 'Press' },
    { href: '/terms', label: 'Terms' },
    { href: '/teams', label: 'Teams' },
  ];

  return (
    <Box>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        py={5}
        px={10}
      >
        <Typography variant='h1' fontSize={36} fontWeight={500}>
          Netellus
        </Typography>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-around'
          gap={5}
        >
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={e => {
                if (link.onClick) {
                  e.preventDefault();
                  link.onClick();
                }
              }}
            >
              <p
                className={
                  link.isButton
                    ? 'rounded-full border border-gray-400 px-4 py-2 text-gray-600 hover:bg-gray-100'
                    : 'text-gray-600 hover:text-white'
                }
              >
                {link.label}
              </p>
            </Link>
          ))}
        </Stack>
      </Stack>

      {/* Main Section */}
      <Stack
        height='80vh'
        direction='column'
        alignItems='center'
        justifyContent='center'
      >
        <Typography variant='h2' fontSize={80}>
          Discover
        </Typography>
        <Typography variant='h2' fontSize={80} mt={-3} mb={2} ml={2}>
          knowledge ideas.
        </Typography>
        <Typography variant='body1' fontSize={20} color='gray' mb={10}>
          Better understand the world.
        </Typography>
        <Link href='/explore'>
          <p className='rounded-full bg-gray-800 px-6 py-3 text-white hover:bg-gray-700'>
            Explore
          </p>
        </Link>
      </Stack>

      {/* Footer */}
      <Stack direction='row' justifyContent='center' gap={2} p={2}>
        {footerLinks.map(link => (
          <Link key={link.href} href={link.href}>
            <p className='hover:text-white'>{link.label}</p>
          </Link>
        ))}
      </Stack>
      <AuthModal
        open={shouldShowAuthModal}
        handleClose={() => setShouldShowAuthModal(false)}
      />
      <RegisterModal
        open={shouldShowRegisterModal}
        handleClose={() => setShouldShowRegisterModal(false)}
      />
    </Box>
  );
}
