export type TDeck = {
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
};

export type TCard = {
  code: string;
  image: string;
  suit: string;
  value: string;
};

export type TCardsResponse = {
  success: boolean;
  deck_id: string;
  remaining: number;
  cards: TCard[];
};
