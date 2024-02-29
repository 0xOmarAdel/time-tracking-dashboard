import { ProductWithPrice } from "../../types/Product";
import currencyFormatter from "../../utils/currencyFormatter";

const ItemPrice: React.FC<ProductWithPrice> = ({ price }) => {
  return <span className="item-price">{currencyFormatter(price)}</span>;
};

export default ItemPrice;
