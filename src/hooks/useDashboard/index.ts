import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct, deleteProduct, updateProduct } from '../../api';
import type { CreateProductRequest, UpdateProductRequest } from '../../types';

export const useCreateProduct = () => {
  const queryCleint = useQueryClient();
  return useMutation({
    mutationKey: ['create-product'],
    mutationFn: (props: CreateProductRequest) => createProduct(props),
    onSuccess: () => queryCleint.invalidateQueries({ queryKey: ['products'] }),
  });
};

export const useUpdateProduct = () => {
  const queryCleint = useQueryClient();

  return useMutation({
    mutationKey: ['update-product'],
    mutationFn: (props: UpdateProductRequest) => updateProduct(props),
    onSuccess: () => queryCleint.invalidateQueries({ queryKey: ['products'] }),
  });
};

export const useDeleteProduct = () => {
  const queryCleint = useQueryClient();

  return useMutation({
    mutationKey: ['update-product'],
    mutationFn: (id: number) => deleteProduct(id),
    onSuccess: () => queryCleint.invalidateQueries({ queryKey: ['products'] }),
  });
};
