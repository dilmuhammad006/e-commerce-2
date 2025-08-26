import type { OrderRequest, OrderResponse } from '../../types';
import { customAxios } from '../axios';

export const createOrder = async (props: OrderRequest) => {
  try {
    const { data } = await customAxios.post('/orders', props);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAllOrderByEmail = async (email: string) => {
  try {
    const { data } = await customAxios.get<OrderResponse>(
      `/orders/customer/${email}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const cancelOrder = async (id: number) => {
  try {
    const { data } = await customAxios.put(`/orders/${id}/status`, {
      status: 'CANCELLED',
    });
    return data;
  } catch (error) {
    throw error;
  }
};
