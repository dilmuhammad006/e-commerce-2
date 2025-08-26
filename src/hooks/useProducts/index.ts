import { useQuery } from '@tanstack/react-query';
import type { ProductPagigationAndSortingProps } from '../../types/product';
import { getAllProducts } from '../../api';

export const useGetAllProducts = (props: ProductPagigationAndSortingProps) => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => getAllProducts(props),
  });
};
