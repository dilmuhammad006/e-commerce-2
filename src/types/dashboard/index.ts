export interface CreateProductRequest {
  name: string;
  price: number;
  stock: number;
  category: string;
  isActive: boolean;
}

export interface UpdateProductRequest extends Partial<CreateProductRequest> {
  id: number;
}
