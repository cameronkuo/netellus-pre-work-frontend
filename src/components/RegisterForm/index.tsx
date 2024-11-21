import { Stack } from '@mui/material';
import * as React from 'react';
import { FormProvider } from 'react-hook-form';

import { ConfirmPasswordField } from '@/components/RegisterForm/Fields/ConfirmPasswordField';
import { EmailField } from '@/components/RegisterForm/Fields/EmailField';
import { PasswordField } from '@/components/RegisterForm/Fields/PasswordField';
import { SubmitButton } from '@/components/RegisterForm/SubmitButton';
import { useRegisterForm } from '@/components/RegisterForm/useFormSchema';

export default function RegisterForm() {
  const form = useRegisterForm();
  return (
    <FormProvider {...form}>
      <Stack spacing={3} sx={{ minHeight: 210, mt: 4 }}>
        <EmailField />
        <PasswordField />
        <ConfirmPasswordField />
        <SubmitButton />
      </Stack>
    </FormProvider>
  );
}
