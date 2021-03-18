import { useReducer, createContext, useContext } from "react";
import { createAction, getType } from "typesafe-actions";
import { ActionType } from "typesafe-actions";
import Button from "components/Button";

type State = { counter: number };

const increase = createAction("increase")();
const decrease = createAction("decrease")();

type Actions = ActionType<typeof increase | typeof decrease>;

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case getType(increase):
      return { counter: state.counter + 1 };

    case getType(decrease):
      return { counter: state.counter - 1 };

    default:
      return state;
  }
};

type Dispatch = React.Dispatch<Actions>;
type ProviderValue = [State, Dispatch];

const CounterContext = createContext<Partial<ProviderValue>>([]);
CounterContext.displayName = "CounterContext";

const CounterProvider: React.FC = ({ children }) => {
  const value = useReducer(reducer, {
    counter: 0,
  });

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

const useCounter = (): ProviderValue => {
  const context = useContext(CounterContext);
  if (context === undefined || context.length === 0) {
    throw new Error(`useCounter must be used within an CounterProvider`);
  }

  return context as ProviderValue;
};

const Counter = () => {
  const [{ counter }, dispatch] = useCounter();

  return (
    <div className="flex items-center space-x-3">
      <Button onClick={() => dispatch(decrease())}>-</Button>
      <span className="text-md">{counter}</span>
      <Button onClick={() => dispatch(increase())}>+</Button>
    </div>
  );
};

const Example2bSample = () => (
  <div className="flex flex-col space-x-6">
    <div className="flex w-full text-lg pb-6">
      context & useReducer hook example
    </div>
    <Counter />
  </div>
);

const Example2b = () => {
  return (
    <CounterProvider>
      <Example2bSample />
    </CounterProvider>
  );
};

export default Example2b;
