import { z } from 'zod';
import { emailSchema, lastNameSchema, userNameSchema } from './common.schemas';
import { USER_TYPE } from '../types/user-type';

export const SignUpSchema = z
  .object({
    email: emailSchema,
    userName: userNameSchema,
    lastName: lastNameSchema,
    password: z
      .string({ required_error: 'Введіть пароль' })
      .min(6, 'Пароль має бути не коротше 6 символів')
      .max(32, 'Пароль має бути не довше 32 символів')
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)/,
        'Пароль має містити принаймні одну літеру та одну цифру'
      ),
    confirmPassword: z
      .string({ required_error: 'Підтвердіть пароль' })
      .min(6, 'Пароль має бути не коротше 6 символів')
      .max(32, 'Пароль має бути не довше 32 символів'),
    type: z.nativeEnum(USER_TYPE, {
      required_error: 'You need to select a type of account.',
    }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Паролі не збігаються',
        path: ['confirmPassword'],
      });
    }
  });

export type TSignUp = z.infer<typeof SignUpSchema>;

export const SignInSchema = z.object({
  email: emailSchema,
  password: z.string().min(6),
});

export type TSignIn = z.infer<typeof SignInSchema>;
