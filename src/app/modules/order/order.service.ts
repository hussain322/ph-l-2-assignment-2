import { TOrder } from './order.interface';
import { orderModel } from './order.model';

// create order
const createOrderIntoDB = async (orderData: TOrder) => {
  const result = await orderModel.create(orderData);
  return result;
};

//get all orders
const getAllOrdersFromDB = async (userEmail: string | undefined) => {
  if (userEmail) {
    const result = await orderModel.find({ email: userEmail });
    return result;
  }
  const result = await orderModel.find();
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
};
