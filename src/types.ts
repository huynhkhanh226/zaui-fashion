export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: Category;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Color {
  name: string;
  hex: string;
}
