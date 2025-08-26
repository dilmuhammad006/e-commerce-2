import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { OrderRequest } from '../../types';
import { cancelOrder, createOrder, getAllOrderByEmail } from '../../api';

export const useCreateOrder = () => {
  const queryCleint = useQueryClient();
  return useMutation({
    mutationKey: ['create-orders'],
    mutationFn: (props: OrderRequest) => createOrder(props),
    onSuccess: () => {
      queryCleint.invalidateQueries({ queryKey: ['get-all-orders-by-email'] });
    },
  });
};

export const useGetAllOrderByEmail = (email: string) => {
  return useQuery({
    queryKey: ['get-all-orders-by-email'],
    queryFn: () => getAllOrderByEmail(email),
  });
};

export const useCancelOrder = () => {
  const queryCleint = useQueryClient();
  return useMutation({
    mutationKey: ['cancel-order'],
    mutationFn: (id: number) => cancelOrder(id),
    onSuccess: () => {
      queryCleint.invalidateQueries({ queryKey: ['get-all-orders-by-email'] });
    },
  });
};
