import { ProductTitle } from "../../types/Product";

const ItemTitle = ({ title }: { title: ProductTitle }) => {
  return (
    <p className="item-title line-clamp" title={title}>
      {title}
    </p>
  );
};

export default ItemTitle;
