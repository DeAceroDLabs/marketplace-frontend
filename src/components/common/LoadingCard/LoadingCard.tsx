import Card from "components/common/Card";

interface LoadingCardProps {
  cards: Number;
  variant: "small" | "medium" | "large";
}

const LoadingCard: React.FC<LoadingCardProps> = ({ cards, variant }) => {
  const loadingCards = Array.from(Array(cards).keys()).map((_, index) => {
    return <Card key={index} size={variant} title={" "} loading={true} />;
  });
  return <>{loadingCards}</>;
};

export default LoadingCard;
