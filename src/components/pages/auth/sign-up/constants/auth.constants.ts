import { TSignUp } from '@/lib/schemas/auth.schemas';
import { USER_TYPE } from '@/lib/types/user-type';

export const SignUpDefaultValues: TSignUp = {
  email: '',
  userName: '',
  lastName: '',
  password: '',
  confirmPassword: '',
  userType: USER_TYPE.PERFORMER,
};
