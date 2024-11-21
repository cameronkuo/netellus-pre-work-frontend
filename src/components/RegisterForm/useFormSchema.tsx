import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const useFormSchema = () => {
  return z.object({
    email: z.string().min(1, '必填'),
    password: z.string().min(1, '必填'),
    confirmPassword: z.string().min(1, '必填'),
  });
};

export type RegisterFormParams = z.infer<ReturnType<typeof useFormSchema>>;

export const createDefaultValues = (): RegisterFormParams => {
  return {
    email: '',
    password: '',
    confirmPassword: '',
  };
};

export function useRegisterForm() {
  return useForm<RegisterFormParams>({
    mode: 'onChange',
    resolver: zodResolver(useFormSchema()),
    defaultValues: createDefaultValues(),
  });
}
