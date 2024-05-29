import { TOrder } from './order.interface';
import { orderModel } from './order.model';

const createOrderIntoDB = async (orderData: TOrder) => {
  const result = await orderModel.create(orderData);
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
};
