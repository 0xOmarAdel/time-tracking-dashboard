import { ProductTitle, ProductPrice } from "../../types/Product";
import ItemPrice from "../Item/ItemPrice";
import ItemQuantity from "../Item/ItemQuantity";
import ItemStock from "../Item/ItemStock";
import ItemTitle from "../Item/ItemTitle";

type Props = {
  price: ProductPrice;
  title: ProductTitle;
};

const CardBody: React.FC<Props> = ({ price, title }) => {
  return (
    <div className="card-body">
      <div className="item-details">
        <ItemPrice price={price} />
        <ItemTitle title={title} />
      </div>
      <div className="xl-visible">
        <ItemStock />
        <ItemQuantity />
      </div>
    </div>
  );
};

export default CardBody;
