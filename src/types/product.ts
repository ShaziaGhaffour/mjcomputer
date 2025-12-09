export type ProductCategory = 'laptop' | 'accessories' | 'used';

export interface Product {
  id: string;
  brand: string;
  name: string;
  price: number;
  color: string;
  description: string;
  category: ProductCategory;
  images: string[];
  video?: string;
  createdAt: string;
}

export interface Promotion {
  id: string;
  text: string;
  isActive: boolean;
}
