import CardMenu from "./CardMenu";
import ItemCategory from "../Item/ItemCategory";
import { ProductCategory } from "../../types/Product";
import ItemCategorySkeleton from "../../skeletons/ItemCategorySkeleton";

type Props = {
  category?: ProductCategory;
  loading?: boolean;
};

const CardHeader: React.FC<Props> = ({ category, loading }) => {
  return (
    <div className="card-header">
      {loading ? (
        <ItemCategorySkeleton />
      ) : (
        <ItemCategory category={category!} />
      )}
      <CardMenu />
    </div>
  );
};

export default CardHeader;
