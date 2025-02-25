'use server';

import { cookies } from 'next/headers';

import { instance } from '../instance';
import { AuthToken, User } from '@/lib/types/auth.types';
import { cookieOptions } from '@/lib/constants/cookieOptions';

export async function logout() {
  cookies().delete({ name: AuthToken.AccessToken, ...cookieOptions });
}

export async function getServerUser() {
  const access_token = cookies().get(AuthToken.AccessToken);

  if (!access_token) {
    throw new Error('No access token found.');
  }

  const { data } = await instance.get<User>(`/auth/me`);

  return data;
}

export async function setAuthToken(token: string) {
  cookies().set(AuthToken.AccessToken, token, cookieOptions);
}

export async function getAccessToken() {
  return cookies().get(AuthToken.AccessToken);
}
