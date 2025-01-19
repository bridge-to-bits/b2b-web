import { UserType } from '@/lib/types/user-type';
import { Genre, Social } from '../api-common.types';

// UpdateUserDTO
export interface UpdateUserDTO {
  username: string;
  city: string;
  avatarFile: File | null;
  profileBackgroundFile: File | null;
  aboutMe: string;
  type: UserType;
  socials: Social[];
  genreIds: string[];
}

export interface User {
  userType: UserType;
  socials: Social[];
  banner: string;
  avatar: string;
  username: string;
  rating: number;
  genres: Genre[];
  location: string;
  description: string;
}
