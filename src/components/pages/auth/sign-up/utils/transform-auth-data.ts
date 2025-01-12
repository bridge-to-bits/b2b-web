import { RegisterBody } from '@/app/api/auth/auth-api.types';
import { TSignUp } from '@/lib/schemas/auth.schemas';

export const transformAuthData = (data: TSignUp): RegisterBody => ({
  email: data.email,
  password: data.password,
  userName: data.userName,
  lastName: data.lastName,
  userType: data.userType,
});
