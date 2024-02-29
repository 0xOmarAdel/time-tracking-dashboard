import { ProductWithTitle } from "../../types/Product";

const ItemTitle: React.FC<ProductWithTitle> = ({ title }) => {
  return (
    <p className="item-title line-clamp" title={title}>
      {title}
    </p>
  );
};

export default ItemTitle;
