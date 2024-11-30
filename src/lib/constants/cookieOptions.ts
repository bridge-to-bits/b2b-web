import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';

export const cookieOptions: Partial<ResponseCookie> = {
  secure: false,
  sameSite: 'none',
  httpOnly: false,
  maxAge: 60 * 60 * 24 * 7,
};
