import { FC } from "react";
import { TCard } from "types/deck.types";

type CardsProps = {
  cards?: TCard[];
  isLoading?: boolean;
};

const Cards: FC<CardsProps> = ({ isLoading, cards = [] }) => (
  <div className="w-full grid grid-cols-4 gap-6 py-6">
    {isLoading
      ? "Cards are loading..."
      : cards.map(({ image }) => <img src={image} alt="" key={image} />)}
  </div>
);

export default Cards;
