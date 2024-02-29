import { ProductPrice } from "../../types/Product";
import currencyFormatter from "../../utils/currencyFormatter";

const ItemPrice = ({ price }: { price: ProductPrice }) => {
  return <span className="item-price">{currencyFormatter(price)}</span>;
};

export default ItemPrice;
