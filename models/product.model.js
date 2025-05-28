import { z } from 'zod';

/* ------------------------- Esquema para validar ------------------------- */

export const ProductSchema = z.object({
  id           : z.number(),
  name         : z.string(),
  code         : z.string(),
  type         : z.enum(['Product', 'Service']),
  account_group: z.number(),
  taxes        : z.array(z.object({ id: z.number() })),
  warehouses   : z.array(z.object({
    id           : z.number(),
    stock        : z.number(),
    minimum_stock: z.number(),
    maximum_stock: z.number()
  })),
  prices       : z.array(z.object({
    price_list_id: z.number(),
    value        : z.number()
  })),
  description  : z.string().optional(),
  barcode      : z.string().optional()
});

export function validateProduct(data) {
  return ProductSchema.parse(data);
}