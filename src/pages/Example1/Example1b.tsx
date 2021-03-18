import { useReducer } from "react";
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

const Example1b = () => {
  const [{ counter }, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <div className="flex flex-col space-x-6">
      <div className="flex items-center space-x-3">
        <Button onClick={() => dispatch(decrease())}>-</Button>
        <span className="text-md">{counter}</span>
        <Button onClick={() => dispatch(increase())}>+</Button>
      </div>
    </div>
  );
};

export default Example1b;
