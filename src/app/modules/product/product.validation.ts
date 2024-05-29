import { z } from 'zod';

// Define a schema for product variants
const variantValidationSchema = z.object({
  type: z.string().min(1, { message: 'Type is required' }),
  value: z.string().min(1, { message: 'Value is required' }),
});

// Define a schema for product inventory
const inventoryValidationSchema = z.object({
  quantity: z
    .number()
    .int()
    .min(0, { message: 'Quantity must be a positive integer' }),
  inStock: z.boolean(),
});

const productValidationSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(20, { message: 'Name cannot exceed 20 characters' }),
  description: z
    .string()
    .min(1, { message: 'Description must be at least 10 character long' }),
  price: z.number().positive({ message: 'Price must be a positive number' }),
  category: z.string().min(1, { message: 'Category field is required' }),
  tags: z.array(
    z.string().min(1, { message: 'Tag must be at least 1 character long' }),
  ),
  variants: z.array(variantValidationSchema),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
