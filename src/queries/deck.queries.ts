import { useQuery, useMutation } from "react-query";
import { TDeck, TCardsResponse } from "types/deck.types";

const ajaxGet = async (host: string) => {
  const response = await fetch(host);

  return response.json();
};

export const useDeckGet = (options: any = {}) =>
  useQuery<TDeck, any>(
    "deck",
    () => ajaxGet("https://deckofcardsapi.com/api/deck/2vnpsgucmiph/shuffle"),
    {
      ...options,
    }
  );

type CardsBody = {
  count: number;
  deck_id: string;
};

export const useDrawCardsPost = (options: any = {}) =>
  useMutation<TCardsResponse, any, any>(
    ({ deck_id, count }: CardsBody) =>
      ajaxGet(
        `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${count}`
      ),
    {
      ...options,
    }
  );
