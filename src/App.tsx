import { useDeckGet, useDrawCardsPost } from "queries/deck.queries";
import { useStore } from "store";
import { setDeckID, setRemaining } from "store/store.actions";
import { TDeck } from "types/deck.types";
import Header from "components/Header";
import Cards from "components/Cards";
import { DrawCardButton, ResetButton } from "components/Button";

function App() {
  const [{ deck_id }, dispatch] = useStore();

  const { isLoading } = useDeckGet({
    onSuccess: (res: TDeck) => {
      if (res.success) {
        dispatch(setDeckID(res.deck_id));
        dispatch(setRemaining(res.remaining));
      }
    },
    enabled: !deck_id,
  });

  const {
    mutate: drawCards,
    data: cardsRes,
    isLoading: cardsLoading,
  } = useDrawCardsPost();

  if (isLoading) {
    return <span>Deck is loading...</span>;
  }

  return (
    <div className="w-full max-w-4xl h-full">
      <Header />

      <div className="flex space-x-12">
        <DrawCardButton drawCards={drawCards} />
        <ResetButton />
      </div>

      {deck_id === cardsRes?.deck_id && (
        <Cards isLoading={cardsLoading} cards={cardsRes?.cards} />
      )}
    </div>
  );
}

export default App;
