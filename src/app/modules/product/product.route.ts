import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

// for create a product
router.post('/', ProductController.createProduct);

//for gets all products
router.get('/', ProductController.getAllProducts);

//for get single product
router.get('/:productId', ProductController.getSingleProduct);

//for update a product
router.put('/:productId', ProductController.updateSingleProduct);

//for delete a product
router.delete('/:productId', ProductController.deleteAProduct);

export const ProductRoutes = router;
