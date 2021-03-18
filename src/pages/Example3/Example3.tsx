import { useEffect, useState } from "react";
import { ajaxGet } from "queries/deck.queries";
import type { TDeck } from "types/deck.types";

const Example3 = () => {
  const [data, setData] = useState<TDeck>();

  useEffect(() => {
    ajaxGet("https://deckofcardsapi.com/api/deck/new/shuffle/").then((res) =>
      setData(res)
    );
  }, []);

  if (!data) {
    return <>loading...</>;
  }

  return (
    <div className="flex flex-col space-y-3">
      <span>Deck ID: {data.deck_id}</span>
      <span>Remaining Cards: {data.remaining}</span>
    </div>
  );
};

export default Example3;
