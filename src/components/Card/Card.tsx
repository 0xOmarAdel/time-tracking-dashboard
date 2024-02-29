import generateRandomColor from "../../utils/generateRandomColor";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import { Product } from "../../types/Product";

type Props = {
  product: Product;
};

const Card: React.FC<Props> = ({ product }) => {
  const bgColor = generateRandomColor();

  return (
    <div className="card">
      <div
        className="card-background"
        style={{ backgroundColor: bgColor }}
      ></div>

      <div className="card-content">
        <CardHeader category={product.category} />
        <CardBody {...product} />
      </div>
    </div>
  );
};

export default Card;
