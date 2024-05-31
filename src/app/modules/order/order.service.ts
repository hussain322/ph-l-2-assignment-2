import { TOrder } from './order.interface';
import { orderModel } from './order.model';

// create order
const createOrderIntoDB = async (orderData: TOrder) => {
  const result = await orderModel.create(orderData);
  return result;
};

//get all orders
const getAllOrdersFromDB = async (userEmail: string | null) => {
  if (userEmail) {
    const result = await orderModel.find({ email: userEmail });
    if (result && result.length > 0) {
      return result;
    } else {
      return null;
    }
  }
  const result = await orderModel.find();
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
};
