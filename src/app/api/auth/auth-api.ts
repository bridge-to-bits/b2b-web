import { User } from '@/lib/types/auth.types';
import { instance } from '../instance';
import { LoginBody, RegisterBody } from './auth-api.types';

class AuthApi {
  async register(body: RegisterBody) {
    return await instance.post<string>('/users/register', body);
  }

  async login(body: LoginBody) {
    return await instance.post<string>('/users/login', body, {
      withCredentials: false,
    });
  }

  async getMe() {
    return await instance.get<User>('/users/me');
  }
}

export const authApi = new AuthApi();
