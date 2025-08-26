export interface CreateProductRequest {
  name: string;
  price: number;
  stock: number;
  category: string;
  isActive: string;
}

export interface UpdateProductRequest extends Partial<CreateProductRequest> {
  id: number;
}
