'use client';

import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Modal, Box, Typography, Stack, Button } from '@mui/material';
import { useState } from 'react';

import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';

type AuthModalProps = {
  open: boolean;
  handleClose: () => void;
};

const AuthModal = (props: AuthModalProps) => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 560,
          backgroundColor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 6,
        }}
      >
        <Typography variant='h4' component='h2' gutterBottom align='center'>
          Netellus
        </Typography>
        {!showRegisterForm && !showLoginForm && (
          <>
            <Stack spacing={2} sx={{ mt: 4 }}>
              <Button
                variant='outlined'
                startIcon={<GoogleIcon />}
                fullWidth
                sx={{ borderRadius: 10, height: 50 }}
              >
                Sign up with Google
              </Button>
              <Button
                variant='outlined'
                startIcon={<FacebookIcon />}
                fullWidth
                sx={{ borderRadius: 10, height: 50 }}
              >
                Sign up with Facebook
              </Button>
              <Button
                variant='outlined'
                startIcon={<AppleIcon />}
                fullWidth
                sx={{ borderRadius: 10, height: 50 }}
              >
                Sign up with Apple
              </Button>
              <Button
                variant='outlined'
                startIcon={<MailOutlineIcon />}
                fullWidth
                sx={{ borderRadius: 10, height: 50 }}
                onClick={() => setShowRegisterForm(true)}
              >
                Sign up with Email
              </Button>
            </Stack>
            <Typography
              variant='body2'
              color='textSecondary'
              align='center'
              sx={{ mt: 4 }}
            >
              Already have an account?
              <a
                href='#'
                onClick={e => {
                  e.preventDefault();
                  setShowLoginForm(true);
                }}
                style={{ color: '#1976d2', textDecoration: 'none' }}
              >
                {' '}
                Sign in.
              </a>
            </Typography>
          </>
        )}
        {showRegisterForm && <RegisterForm />}
        {showLoginForm && <LoginForm />}
      </Box>
    </Modal>
  );
};

export default AuthModal;
