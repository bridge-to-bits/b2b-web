import { z } from 'zod';

export const AddTrackSchema = z.object({
  name: z
    .string({ required_error: `Введіть ім'я` })
    .min(2, 'Не коротше 2 символів')
    .max(100, 'Не довше 100 символів')
    .transform((value) => value.trim()),
  description: z.string().optional(),
  genres: z.array(z.string()).optional(),
  track: z
    .unknown()
    .transform((value) => {
      return value as FileList;
    })
    .nullable(),
});

export type TAddTrack = z.infer<typeof AddTrackSchema>;
