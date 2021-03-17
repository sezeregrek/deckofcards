import { useDeckGet, useDrawCardsPost } from "queries/deck.queries";
import { useStore } from "store";
import { setDeckID } from "store/store.actions";
import { TDeck } from "types/deck.types";

function App() {
  const [{ deck_id }, dispatch] = useStore();

  const { isLoading } = useDeckGet({
    onSuccess: (res: TDeck) => {
      if (res.success) {
        dispatch(setDeckID(res.deck_id));
      }
    },
    enabled: !deck_id,
  });

  const {
    mutate: drawCards,
    data: cardsRes,
    isLoading: cardsLoading,
  } = useDrawCardsPost({ enabled: !deck_id });

  if (isLoading) {
    return <span>Deck is loading...</span>;
  }

  return (
    <div className="w-full max-w-4xl h-full">
      <header className="flex items-end justify-between py-8">
        <span className="font-bold text-xl">Deck of Cards</span>
        {cardsRes?.remaining && (
          <span className="text-xs">
            Remaining cards: {cardsRes?.remaining}
          </span>
        )}
      </header>
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded-sm"
        onClick={() => drawCards({ count: 5, deck_id })}
      >
        Draw Cards
      </button>

      {cardsLoading ? (
        "Cards are loading..."
      ) : (
        <div className="w-full grid grid-cols-4 gap-6 py-6">
          {(cardsRes?.cards ?? []).map(({ image }) => (
            <img src={image} alt="" key={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
