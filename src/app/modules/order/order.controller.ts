import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import orderValidationSchema from './order.validation';
import mongoose from 'mongoose';
import { productModel } from '../product/product.model';

// create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    // check for valid order id
    const isValidOrderId = mongoose.Types.ObjectId.isValid(order.productId);
    if (isValidOrderId) {
      const product = await productModel.findById(order.productId);

      //check if order quantity gather than product quantity
      if (order.quantity > (product?.inventory?.quantity as number)) {
        res.status(400).json({
          success: false,
          message: 'Product quantity is not available in inventory',
          data: null,
        });
      } else {
        if (product && product?.inventory?.quantity > 0) {
          const newProductQuantity =
            product.inventory.quantity - order.quantity;
          const updatedProductData = {
            'inventory.quantity': newProductQuantity,
            'inventory.inStock': newProductQuantity > 0,
          };

          // update new product
          const decreaseOrderQuantity = await productModel.findByIdAndUpdate(
            order.productId,
            { $set: updatedProductData },
            { new: true },
          );
          const zodParseData = orderValidationSchema.parse(order); // zod validation
          const result = await OrderServices.createOrderIntoDB(zodParseData);

          res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: result,
          });
        } else {
          res.status(400).json({
            success: false,
            message: 'Product Id not match with Order Id',
            data: null,
          });
        }
      }
    } else {
      res.status(400).json({
        success: false,
        message: 'Product Id not match with Order Id',
        data: null,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      data: err,
    });
  }
};

// get all orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const userEmail = req.query.email;
    const result = await OrderServices.getAllOrdersFromDB(
      userEmail as string | null,
    );

    res.status(200).json({
      success: true,
      message: userEmail
        ? 'Orders fetched successfully for user email!'
        : 'Orders fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      data: err,
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrders,
};
