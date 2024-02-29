import { ProductCategory } from "../../types/Product";

const ItemCategory = ({ category }: { category: ProductCategory }) => {
  return <h3 className="item-category">{category}</h3>;
};

export default ItemCategory;
