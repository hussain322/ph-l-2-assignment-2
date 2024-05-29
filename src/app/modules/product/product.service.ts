import { TProduct } from './product.interface';
import { productModel } from './product.model';

//create a product
const createProductIntoDB = async (productData: TProduct) => {
  const result = await productModel.create(productData);
  return result;
};

//get all products
const getAllProductsFromDB = async (searchTerm: string | null) => {
  if (searchTerm) {
    const products = await productModel
      .find({
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { description: { $regex: searchTerm, $options: 'i' } },
        ],
      })
      .exec();
    return products;
  }
  const result = await productModel.find();
  return result;
};

//get single product
const getSingleProductFromDB = async (productId: string) => {
  const result = await productModel.findById(productId);
  return result;
};

// Update a product
const updateSingleProductIntoDB = async (productId: string, updateData: {}) => {
  const result = await productModel.findByIdAndUpdate(productId, updateData, {
    new: true,
  });
  return result;
};

//Delete a Product
const deleteAProductFromDB = async (productId: string) => {
  const isProductExists = await productModel.findById(productId);
  if (isProductExists) {
    const result = await productModel.findByIdAndDelete(productId);
    return null;
  }
  const result = 'Product not found';
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateSingleProductIntoDB,
  deleteAProductFromDB,
};
