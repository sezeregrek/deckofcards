import { createContext, useContext } from "react";

const CounterContext = createContext({ counter: 0 });

const Example2aSample = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div className="flex flex-col space-x-6">
      <div className="flex w-full text-lg pb-6">context basic example</div>
      <div className="flex items-center space-x-3">
        <span className="text-md">Counter: {counter}</span>
      </div>
    </div>
  );
};

const Example2a = () => {
  return (
    <CounterContext.Provider value={{ counter: 1000 }}>
      <Example2aSample />
    </CounterContext.Provider>
  );
};

export default Example2a;
