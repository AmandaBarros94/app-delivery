import { z } from 'zod';

const MIN_NAME_LENGTH = 12;
const MIN_PASSWORD_LENGTH = 6;

const userFormSchema = z.object({
  name: z.string().min(MIN_NAME_LENGTH),
  email: z.string().email(),
  password: z.string().min(MIN_PASSWORD_LENGTH),
  role: z.enum(['customer', 'seller', 'administrator']),
});

export default userFormSchema;
