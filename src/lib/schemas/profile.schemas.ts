import { z } from 'zod';
import { userNameSchema } from './common.schemas';

export const ProfileSchema = z.object({
  userName: userNameSchema,
  city: z.string().optional(),
  aboutMe: z.string().optional(),
  socials: z.object({
    instagram: z.string().url().optional(),
    spotify: z.string().url().optional(),
    twitter: z.string().url().optional(),
    music: z.string().url().optional(),
  }),
  genres: z.array(z.string().optional()),
  bannerFile: z
    .unknown()
    .transform((value) => {
      return value as FileList;
    })
    .nullable(),
  avatarFile: z
    .unknown()
    .transform((value) => {
      return value as FileList;
    })
    .nullable(),
});

export type TProfile = z.infer<typeof ProfileSchema>;
