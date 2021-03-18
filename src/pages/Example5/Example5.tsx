import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useDeckGet, useDrawCardsPost } from "queries/deck.queries";
import { StoreProvider, useStore } from "pages/Example5/store";
import { setDeckID, setRemaining } from "./store/store.actions";
import { TDeck } from "types/deck.types";
import Header from "./Header";
import Cards from "components/Cards";
import { DrawCardButton, ResetButton } from "./Button";

function Example5App() {
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
    <div className="w-full h-full">
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});

const Example5 = () => (
  <StoreProvider>
    <QueryClientProvider client={queryClient}>
      <Example5App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StoreProvider>
);

export default Example5;
