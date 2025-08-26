export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
  isActive: boolean;
  createdAt: string;
}

interface PageableSort {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}

interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: PageableSort;
  offset: number;
  unpaged: boolean;
  paged: boolean;
}

interface DataResponse {
  content: Product[];
  pageable: Pageable;
  totalElements: number;
  totalPages: number;
  last: boolean;
  size: number;
  number: number;
  sort: PageableSort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data: DataResponse;
}

export interface ProductPagigationAndSortingProps {
  page?: number;
  size?: number;
  sortBy?: 'id' | 'price' | 'createdAt';
  sortDir?: 'asc' | 'desc';
}
export interface OneProductResponse {
  success: boolean;
  message: string;
  data: Product;
}
