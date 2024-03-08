export interface Product {
  id: number;
  name: string;
  image: string;
  price?: number | null;
  details: string;
  category: string;
}
