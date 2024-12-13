import { z } from 'zod';

export const ProfileSchema = z.object({
  banner: z
    .unknown()
    .transform((value) => {
      return value as FileList;
    })
    .nullable(),
  avatar: z
    .unknown()
    .transform((value) => {
      return value as FileList;
    })
    .nullable(),
});

export type TProfile = z.infer<typeof ProfileSchema>;
