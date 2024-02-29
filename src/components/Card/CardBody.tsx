import ItemPriceSkeleton from "../../skeletons/ItemPriceSkeleton";
import ItemTitleSkeleton from "../../skeletons/ItemTitleSkeleton";
import { ProductTitle, ProductPrice } from "../../types/Product";
import ItemPrice from "../Item/ItemPrice";
import ItemQuantity from "../Item/ItemQuantity";
import ItemStock from "../Item/ItemStock";
import ItemTitle from "../Item/ItemTitle";

type Props = {
  price?: ProductPrice;
  title?: ProductTitle;
  loading?: boolean;
};

const CardBody: React.FC<Props> = ({ price, title, loading }) => {
  return (
    <div className="card-body">
      <div className="item-details">
        {loading ? <ItemPriceSkeleton /> : <ItemPrice price={price!} />}
        {loading ? <ItemTitleSkeleton /> : <ItemTitle title={title!} />}
      </div>
      <div className="xl-visible">
        <ItemStock />
        <ItemQuantity />
      </div>
    </div>
  );
};

export default CardBody;
