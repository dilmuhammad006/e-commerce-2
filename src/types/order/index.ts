interface Product {
  productId: number;
  quantity: number;
}
export interface OrderRequest {
  customerName: string;
  customerEmail: string;
  orderItems: Product[];
}
export interface OrderItem {
  id: number;
  productId: number;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export type OrderStatus = 'PENDING' | 'COMPLETED' | 'CANCELLED';

export interface Order {
  id: number;
  customerName: string;
  customerEmail: string;
  orderDate: string;
  status: OrderStatus;
  totalAmount: number;
  orderItems: OrderItem[];
}

export interface OrderResponse {
  success: boolean;
  message: string;
  data: Order[];
}
