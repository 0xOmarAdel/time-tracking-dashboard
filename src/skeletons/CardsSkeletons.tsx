import CardsSkeleton from "./CardSkeleton";

const CardsSkeletons = ({ number }: { number: number }) => {
  return (
    <>
      {Array.from({ length: number }).map((_, index) => (
        <CardsSkeleton key={index} />
      ))}
    </>
  );
};

export default CardsSkeletons;
