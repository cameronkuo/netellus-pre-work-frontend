import { Stack } from '@mui/material';
import * as React from 'react';
import { FormProvider } from 'react-hook-form';

import { EmailField } from '@/components/LoginForm/Fields/EmailField';
import { PasswordField } from '@/components/LoginForm/Fields/PasswordField';
import { SubmitButton } from '@/components/LoginForm/SubmitButton';
import { useLoginForm } from '@/components/LoginForm/useFormSchema';

export default function LoginForm() {
  const form = useLoginForm();
  return (
    <FormProvider {...form}>
      <Stack spacing={3} sx={{ minHeight: 210, mt: 4 }}>
        <EmailField />
        <PasswordField />
        <SubmitButton />
      </Stack>
    </FormProvider>
  );
}
