import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const useFormSchema = () => {
  return z.object({
    email: z.string().min(1, '必填'),
    password: z.string().min(1, '必填'),
  });
};

export type LoginFormParams = z.infer<ReturnType<typeof useFormSchema>>;

export const createDefaultValues = (): LoginFormParams => {
  return {
    email: '',
    password: '',
  };
};

export function useLoginForm() {
  return useForm<LoginFormParams>({
    mode: 'onChange',
    resolver: zodResolver(useFormSchema()),
    defaultValues: createDefaultValues(),
  });
}
