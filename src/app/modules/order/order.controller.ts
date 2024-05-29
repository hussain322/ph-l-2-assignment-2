import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import orderValidationSchema from './order.validation';

// create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;
    const zodParseData = orderValidationSchema.parse(orderData); // zod validation
    const result = await OrderServices.createOrderIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
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

// get all orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const userEmail = req.query.email;
    const result = await OrderServices.getAllOrdersFromDB(
      userEmail as string | undefined,
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
