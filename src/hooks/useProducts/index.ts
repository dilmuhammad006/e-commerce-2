import { useQuery } from '@tanstack/react-query';
import type { ProductPagigationAndSortingProps } from '../../types/product';
import { getAllProducts, getOneProduct } from '../../api';

export const useGetAllProducts = (props: ProductPagigationAndSortingProps) => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => getAllProducts(props),
  });
};

export const useGetOneProduct = (id: number | string) => {
  return useQuery({
    queryKey: ['product'],
    queryFn: () => getOneProduct(id),
  });
};
