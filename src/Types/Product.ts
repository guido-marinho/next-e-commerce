export type Product = {
  id: number;
  title: string;
  description: string | null;
  price: number | null;
  image: string;
  category: string;
};

export type ProductImage = {
  product: Product;
  fill?: boolean;
}