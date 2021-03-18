import { useStore } from "pages/Example5/store";

const Header = () => {
  const [{ remaining }] = useStore();

  return (
    <header className="flex items-end justify-between pb-8">
      <span className="font-bold text-xl">Deck of Cards</span>
      {remaining !== undefined && (
        <span className="text-xs">Remaining cards: {remaining}</span>
      )}
    </header>
  );
};

export default Header;
