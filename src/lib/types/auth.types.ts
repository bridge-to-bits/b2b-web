export interface User {
  id: string;
  email: string;
  lastName?: string;
  userName: string;
  avatar?: string;
}

export interface Session {
  user: User | null;
  loading: boolean;
}

export enum AuthToken {
  AccessToken = 'access_token',
}

export interface Token {
  accessToken: string;
}
