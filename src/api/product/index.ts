import type {
  ApiResponse,
  ProductPagigationAndSortingProps,
} from '../../types/product';
import { customAxios } from '../axios';

export const getAllProducts = async ({
  page,
  size,
  sortBy,
  sortDir,
}: ProductPagigationAndSortingProps) => {
  try {
    const { data } = await customAxios.get<ApiResponse>(
      `/products?page=${page || 0}&size=${size || 10}&sortBy=${sortBy || 'createdAt'}&sortDir=${sortDir || 'desc'}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
