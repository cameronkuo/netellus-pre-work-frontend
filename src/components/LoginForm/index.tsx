import { Stack } from '@mui/material';
import * as React from 'react';
import { FormProvider } from 'react-hook-form';

import { EmailField } from '@/components/LoginForm/Fields/EmailField';
import { PasswordField } from '@/components/LoginForm/Fields/PasswordField';
import { SubmitButton } from '@/components/LoginForm/SubmitButton';
import {
  LoginFormParams,
  useLoginForm,
} from '@/components/LoginForm/useFormSchema';

export default function LoginForm() {
  const form = useLoginForm();

  const handleSubmit = (data: LoginFormParams) => {
    // TODO: handle post register here
    window.console.log(data);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Stack spacing={3} sx={{ minHeight: 210, mt: 4 }}>
          <EmailField />
          <PasswordField />
          <SubmitButton />
        </Stack>
      </form>
    </FormProvider>
  );
}
