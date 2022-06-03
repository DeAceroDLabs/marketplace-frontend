import Card from "components/common/Card";

interface LoadingCardProps {
  cards: Number;
  variant: "small" | "medium" | "large";
}

const LoadingCard: React.FC<LoadingCardProps> = ({
  cards,
  variant
}) => {
  const loadingCards = Array.from(Array(cards).keys()).map((item) => {
    return (
      <Card key={item} size={variant} title={" "} loading={true} />
    );
  });
  return <>{loadingCards}</>;
};

export default LoadingCard;
