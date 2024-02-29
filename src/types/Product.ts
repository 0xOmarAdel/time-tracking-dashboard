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

export type ProductTitle = Product["title"];
export type ProductPrice = Product["price"];
export type ProductCategory = Product["category"];
