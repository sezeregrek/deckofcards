import { createAction } from "typesafe-actions";
import { ActionType } from "typesafe-actions";

export const setDeckID = createAction("Store_Set_Deck_Id")<string>();
export const resetDeck = createAction("Store_Reset_Deck_Id")();
export const setRemaining = createAction("Store_Set_Remaining")<number>();
export const increaseDrawCount = createAction("Store_Increase_DrawCount")();
export const decreaseDrawCount = createAction("Store_Deccrease_DrawCount")();

export type StoreActions = ActionType<
  | typeof setDeckID
  | typeof resetDeck
  | typeof setRemaining
  | typeof increaseDrawCount
  | typeof decreaseDrawCount
>;
