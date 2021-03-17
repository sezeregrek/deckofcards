import { useDeckGet, useDrawCardsPost } from "queries/deck.queries";

function App() {
  const { data } = useDeckGet();
  const { mutate: drawCards } = useDrawCardsPost();

  return (
    <div className="">
      <header className="">Deck of Cards</header>
      <button onClick={() => drawCards({ count: 5 })}>Draw Cards</button>
    </div>
  );
}

export default App;
