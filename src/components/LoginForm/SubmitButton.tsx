import { LoadingButton } from '@mui/lab';
import { useFormContext } from 'react-hook-form';

import { LoginFormParams } from '@/components/LoginForm/useFormSchema';

export const SubmitButton = () => {
  const form = useFormContext<LoginFormParams>();

  const handleSubmit = (data: LoginFormParams) => {
    // TODO: handle post register here
    window.console.log(data);
  };

  return (
    <LoadingButton
      variant='contained'
      sx={{ borderRadius: 10, height: 40 }}
      loading={form.formState.isSubmitting}
      onClick={form.handleSubmit(handleSubmit)}
    >
      Submit
    </LoadingButton>
  );
};
