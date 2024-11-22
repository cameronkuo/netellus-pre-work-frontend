import { LoadingButton } from '@mui/lab';
import { useFormContext } from 'react-hook-form';

import { LoginFormParams } from '@/components/LoginForm/useFormSchema';

export const SubmitButton = () => {
  const form = useFormContext<LoginFormParams>();
  return (
    <LoadingButton
      variant='contained'
      sx={{ borderRadius: 10, height: 50 }}
      loading={form.formState.isSubmitting}
    >
      Submit
    </LoadingButton>
  );
};
