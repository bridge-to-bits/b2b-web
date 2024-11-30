import { isServer } from '@/lib/constants/isServer';
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

const cookiesInterceptor = async (req: any) => {
  if (isServer) {
    const { cookies } = await import('next/headers');
    const cookiesString = cookies()
      .getAll()
      .map((item) => `${item.name}=${item.value}`)
      .join('; ');
    req.headers.Cookie = cookiesString;
  }
  return req;
};

instance.interceptors.request.use(cookiesInterceptor);

export { instance };
