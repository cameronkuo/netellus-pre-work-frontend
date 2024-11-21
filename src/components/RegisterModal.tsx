'use client';

import { Modal, Box, Typography } from '@mui/material';

import RegisterForm from '@/components/RegisterForm';

type RegisterModalProps = {
  open: boolean;
  handleClose: () => void;
};

const RegisterModal = (props: RegisterModalProps) => {
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
        <RegisterForm />
      </Box>
    </Modal>
  );
};

export default RegisterModal;
