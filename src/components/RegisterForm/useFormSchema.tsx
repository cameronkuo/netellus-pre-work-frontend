import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const useFormSchema = () => {
  return z
    .object({
      email: z.string().min(1, 'Required').email('Invalid email address'),
      password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/\d/, 'Password must contain at least one number')
        .regex(
          /[^a-zA-Z0-9]/,
          'Password must contain at least one special character',
        ),
      confirmPassword: z.string().min(1, 'Required'),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ['confirmPassword'],
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
