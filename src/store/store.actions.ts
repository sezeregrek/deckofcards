import { createAction } from "typesafe-actions";
import { ActionType } from "typesafe-actions";

export const setDeckID = createAction("Store_Get_Deck_Id")<number>();

export type StoreActions = ActionType<typeof setDeckID>;
