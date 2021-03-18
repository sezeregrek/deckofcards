import { FC } from "react";
import { useQueryClient } from "react-query";
import { useStore } from "pages/Example5/store";
import {
  resetDeck,
  increaseDrawCount,
  decreaseDrawCount,
} from "pages/Example5/store/store.actions";
import Button from "components/Button";

export const DrawCardButton: FC<{ drawCards: Function }> = ({ drawCards }) => {
  const [{ drawCount, remaining }, dispatch] = useStore();

  if (!remaining) {
    return null;
  }

  return (
    <div className="flex items-center space-x-6">
      <div className="flex items-center space-x-3">
        <Button onClick={() => dispatch(decreaseDrawCount())}>-</Button>
        <span className="text-md">{drawCount}</span>
        <Button onClick={() => dispatch(increaseDrawCount())}>+</Button>
      </div>

      <Button onClick={() => drawCards()}>Draw Cards ({drawCount})</Button>
    </div>
  );
};

export const ResetButton = () => {
  const [, dispatch] = useStore();
  const client = useQueryClient();

  return (
    <Button
      onClick={() => {
        client.clear();
        dispatch(resetDeck());
      }}
    >
      Reset Deck
    </Button>
  );
};
