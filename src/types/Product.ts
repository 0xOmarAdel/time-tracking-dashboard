/**
 * Represents a product with all its details.
 */
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

/**
 * Represents the props for a single product component.
 */
export interface ProductProps {
  product: Product;
}

/**
 * Represents the props for a multiple products component.
 */
export interface ProductsProps {
  products: Product[];
}

/**
 * Represents a product with only a specific property.
 */
export type ProductWithOnly<T extends keyof Product> = Pick<Product, T>;
export type ProductWithTitle = ProductWithOnly<"title">;
export type ProductWithPrice = ProductWithOnly<"price">;
export type ProductWithCategory = ProductWithOnly<"category">;
