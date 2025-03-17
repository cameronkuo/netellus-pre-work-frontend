import { TextField } from '@mui/material';
import { useFormContext, useController } from 'react-hook-form';

import { LoginFormParams } from '@/components/LoginForm/useFormSchema';

export const EmailField = () => {
  const form = useFormContext<LoginFormParams>();
  const controller = useController({
    name: 'email',
    control: form.control,
  });

  return (
    <TextField
      fullWidth
      label='Email'
      variant='outlined'
      value={controller.field.value}
      error={!!controller.fieldState.error}
      helperText={controller.fieldState.error?.message}
      onChange={controller.field.onChange}
    />
  );
};
