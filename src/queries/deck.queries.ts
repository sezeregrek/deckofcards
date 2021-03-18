import { useQuery, useMutation } from "react-query";
import { useStore } from "pages/Example5/store";
import { setRemaining } from "pages/Example5/store/store.actions";
import { TDeck, TCardsResponse } from "types/deck.types";

const ajaxGet = async (host: string) => {
  const response = await fetch(host);

  return response.json();
};

export const useDeckGet = (options: any = {}) =>
  useQuery<TDeck, any>(
    "deck",
    () => ajaxGet("https://deckofcardsapi.com/api/deck/new/shuffle"),
    {
      ...options,
    }
  );

export const useDrawCardsPost = () => {
  const [{ deck_id, drawCount }, dispatch] = useStore();

  return useMutation(
    () =>
      ajaxGet(
        `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${drawCount}`
      ),
    {
      onSuccess: (res: TCardsResponse) => {
        if (res.remaining !== undefined) {
          dispatch(setRemaining(res.remaining));
        }
      },
    }
  );
};
