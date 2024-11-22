import { LoadingButton } from '@mui/lab';
import { useFormContext } from 'react-hook-form';

import { RegisterFormParams } from '@/components/RegisterForm/useFormSchema';

export const SubmitButton = () => {
  const form = useFormContext<RegisterFormParams>();

  const handleSubmit = (data: RegisterFormParams) => {
    // TODO: handle post register here
    window.console.log(data);
  };

  return (
    <LoadingButton
      variant='contained'
      sx={{ borderRadius: 10, height: 50 }}
      loading={form.formState.isSubmitting}
      onClick={form.handleSubmit(handleSubmit)}
    >
      Submit
    </LoadingButton>
  );
};
