import { Schema, model, connect } from 'mongoose';
import { TInventory, TProduct, TVariant } from './product.interface';

export const variantsSchema = new Schema<TVariant>({
  type: {
    type: String,
    required: true,
    trim: true,
  },
  value: {
    type: String,
    required: true,
    trim: true,
  },
});

export const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: true,
    trim: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

export const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  tags: {
    type: [String],
    required: true,
    trim: true,
  },
  variants: [variantsSchema],
  inventory: inventorySchema,
});

export const Product = model<TProduct>('Product', productSchema);
