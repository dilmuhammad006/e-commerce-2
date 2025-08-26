import type { CreateProductRequest, UpdateProductRequest } from '../../types';
import { customAxios } from '../axios';

export const createProduct = async (props: CreateProductRequest) => {
  try {
    const { data } = await customAxios.post('products', props);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (props: UpdateProductRequest) => {
  try {
    const { data } = await customAxios.post(`products/${props.id}`, props);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const { data } = await customAxios.delete(`/products/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
