import { z } from 'zod';

export const AddPerformerSchema = z.object({
  performerIds: z.array(z.string()).optional(),
});

export type TAddPerformer = z.infer<typeof AddPerformerSchema>;
