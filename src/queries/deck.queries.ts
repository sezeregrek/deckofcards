import { useQuery, useMutation } from "react-query";
import { TDeck } from "types/deck.types";

const ajaxGet = async (host: string) => {
  const response = await fetch(host);

  return response.json();
};

export const useDeckGet = () =>
  useQuery<TDeck, any>("deck", () =>
    ajaxGet("https://deckofcardsapi.com/api/deck/2vnpsgucmiph/?cards=true")
  );

export const useDrawCardsPost = () =>
  useMutation((body: { count: number }) =>
    ajaxGet(`https://deckofcardsapi.com/api/deck/new/draw/?count=${body.count}`)
  );
