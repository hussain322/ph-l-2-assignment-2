import { Request, Response } from 'express';
import { OrderServices } from './order.service';

// create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;
    const result = await OrderServices.createOrderIntoDB(orderData);

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

export const OrderController = {
  createOrder,
};
