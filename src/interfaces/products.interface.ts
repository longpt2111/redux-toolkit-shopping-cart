export interface Product {
  productId?: string;
  productName: string;
  description: string;
  imageUrl: string;
  price: number;
}

export interface ProductsState {
  loading: boolean;
  products: Product[];
  error: string | null;
}
