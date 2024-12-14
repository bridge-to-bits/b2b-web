import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const { hostname } = new URL(apiUrl!);

export const cookieOptions: Partial<ResponseCookie> = {
  secure: true,
  sameSite: 'none',
  httpOnly: false,
  maxAge: 60 * 60 * 24 * 7,
  domain: hostname,
};
