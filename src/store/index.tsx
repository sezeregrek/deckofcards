import React from "react";
import { getType } from "typesafe-actions";
import * as actions from "./store.actions";
import type { StoreActions } from "./store.actions";

type State = {
  deck_id?: string;
  drawCount: number;
  remaining?: number;
};

const initialState: State = {
  drawCount: 1,
};

const reducer = (state: State, action: StoreActions): State => {
  switch (action.type) {
    case getType(actions.setDeckID):
      return {
        ...state,
        deck_id: action.payload,
      };
    case getType(actions.resetDeck):
      return {
        ...state,
        deck_id: undefined,
      };
    case getType(actions.setRemaining):
      return {
        ...state,
        remaining: action.payload,
      };
    case getType(actions.increaseDrawCount):
      return {
        ...state,
        drawCount: state.drawCount < 52 ? state.drawCount + 1 : state.drawCount,
      };
    case getType(actions.decreaseDrawCount):
      return {
        ...state,
        drawCount: state.drawCount > 0 ? state.drawCount - 1 : 0,
      };
    default:
      return state;
  }
};

type Dispatch = React.Dispatch<StoreActions>;
type ProviderValue = [State, Dispatch];

const StoreContext = React.createContext<Partial<ProviderValue>>([]);
StoreContext.displayName = "StoreContext";

export const StoreProvider: React.FC = ({ children }) => {
  const value = React.useReducer(reducer, {
    ...initialState,
  });

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export const useStore = (): ProviderValue => {
  const context = React.useContext(StoreContext);
  if (context === undefined || context.length === 0) {
    throw new Error(`useStore must be used within an StoreProvider`);
  }

  return context as ProviderValue;
};
