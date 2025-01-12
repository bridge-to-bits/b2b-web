import { UserType } from '@/lib/types/user-type';

export interface LoginBody {
  email: string;
  password: string;
}
export interface RegisterBody {
  email: string;
  password: string;
  lastName?: string;
  userName: string;
  userType: UserType;
}
