import { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import Card from "./Card/Card";
import { Product } from "../types/Product";
import CardsSkeletons from "../skeletons/CardsSkeletons";

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
      {loading ? (
        <CardsSkeletons number={10} />
      ) : (
        products?.map((product) => <Card key={product.id} product={product} />)
      )}
    </div>
  );
};

export default ProductList;
