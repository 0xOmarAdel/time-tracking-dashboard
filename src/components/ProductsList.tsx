import { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import Card from "./Card/Card";
import { Product } from "../types/Product";

const ProductList = () => {
  const {
    runAxios,
    data: products,
    loading,
    error,
  } = useAxios<Product[]>({
    url: "https://fakestoreapi.com/products?limit=10",
  });

  useEffect(() => {
    runAxios();
  }, [runAxios]);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="cards-container">
      {products?.map((product) => (
        <Card key={product.id} product={product} loading={loading} />
      ))}
    </div>
  );
};

export default ProductList;
