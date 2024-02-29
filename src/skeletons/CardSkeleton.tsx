import CardBody from "../components/Card/CardBody";
import CardHeader from "../components/Card/CardHeader";
const CardSkeleton = () => {
  const bgColor = "#5747ea";

  return (
    <div className="card">
      <div
        className="card-background"
        style={{ backgroundColor: bgColor }}
      ></div>
      <div className="card-content">
        <CardHeader loading={true} />
        <CardBody loading={true} />
      </div>
    </div>
  );
};

export default CardSkeleton;
