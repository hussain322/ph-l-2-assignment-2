import { z } from 'zod';

const orderValidationSchema = z.object({
  email: z.string().email(),
  productId: z.string().min(1, { message: 'productId is required' }),
  price: z.number().positive(),
  quantity: z.number().positive().int(),
});

export default orderValidationSchema;
