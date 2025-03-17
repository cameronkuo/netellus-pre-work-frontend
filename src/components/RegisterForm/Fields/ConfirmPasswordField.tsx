import { TextField } from '@mui/material';
import { useFormContext, useController } from 'react-hook-form';

import { RegisterFormParams } from '@/components/RegisterForm/useFormSchema';

export const ConfirmPasswordField = () => {
  const form = useFormContext<RegisterFormParams>();
  const controller = useController({
    name: 'confirmPassword',
    control: form.control,
  });

  return (
    <TextField
      fullWidth
      label='Confirm Password'
      type='password'
      variant='outlined'
      value={controller.field.value}
      error={!!controller.fieldState.error}
      helperText={controller.fieldState.error?.message}
      onChange={controller.field.onChange}
    />
  );
};
