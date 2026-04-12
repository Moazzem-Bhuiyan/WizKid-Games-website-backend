import { z } from 'zod';

export const schema = z.object({
  id: z.string().min(1, 'ID is required'),
  type: z.string().min(1, 'Type is required'),
  name: z.string().min(1, 'Name is required'),
  phoneNumber: z
    .string()
    .regex(/^(\+?\d{8,15})$/, 'Invalid phone number format'),
});

const create = z.object({ body: schema });
const update = z.object({ body: schema.deepPartial() });

export const velkiAgentValidator = {
  create,
  update,
};
