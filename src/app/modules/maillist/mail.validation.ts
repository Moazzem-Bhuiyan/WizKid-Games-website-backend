import { z } from 'zod';

export const schema = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
});

const create = z.object({ body: schema });
const update = z.object({ body: schema.deepPartial() });

export const mailValidator = {
  create,
  update,
};
