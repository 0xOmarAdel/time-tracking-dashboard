import { ProductWithCategory } from "../../types/Product";

const ItemCategory: React.FC<ProductWithCategory> = ({ category }) => {
  return <h3 className="item-category">{category}</h3>;
};

export default ItemCategory;
