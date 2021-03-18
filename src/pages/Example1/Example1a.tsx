import { useState } from "react";
import Button from "components/Button";

const Example1a = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="flex flex-col space-x-6">
      <div className="flex items-center space-x-3">
        <Button onClick={() => setCounter(counter - 1)}>-</Button>
        <span className="text-md">{counter}</span>
        <Button onClick={() => setCounter(counter + 1)}>+</Button>
      </div>
    </div>
  );
};

export default Example1a;
