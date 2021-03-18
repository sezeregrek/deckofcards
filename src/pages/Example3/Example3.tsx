import { useEffect, useState } from "react";
import { ajaxGet } from "queries/deck.queries";
import type { TCard } from "types/deck.types";
import Cards from "components/Cards";

const Example3 = () => {
  const [data, setData] = useState<TCard[]>();

  useEffect(() => {
    ajaxGet(
      "https://deckofcardsapi.com/api/deck/new/draw/?count=4"
    ).then((res) => setData(res.cards));
  }, []);

  if (!data) {
    return <>loading...</>;
  }

  return <Cards cards={data} />;
};

export default Example3;
