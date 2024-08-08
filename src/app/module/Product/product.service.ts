import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payload: Partial<TProduct>) => {
  const result = await Product.create(payload);
  return result;
};



export const ProductServices = {
  createProduct,
};
