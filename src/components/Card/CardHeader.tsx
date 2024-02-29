import CardMenu from "./CardMenu";
import ItemCategory from "../Item/ItemCategory";
import { ProductCategory } from "../../types/Product";

type Props = {
  category: ProductCategory;
};

const CardHeader: React.FC<Props> = ({ category }) => {
  return (
    <div className="card-header">
      <ItemCategory category={category} /> <CardMenu />
    </div>
  );
};

export default CardHeader;
