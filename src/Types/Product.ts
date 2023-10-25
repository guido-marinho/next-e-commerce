export type Product = {
  id: string;
  name: string;
  description: string | null;
  price: number | null;
  quantity?: number | 1;
  currency?: string;
  image: string;
};

export type ProductImage = {
  product: Product;
  fill?: boolean;
}