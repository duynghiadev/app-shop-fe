import { createContext, useState } from "react";
import Component1 from "./components/component1";
import "./App.css";

export const CountContext = createContext();

const App1 = () => {
  const [count, setCount] = useState(20);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <CountContext.Provider value={{ count, handleIncrease }}>
      <div className="App">
        <Component1 />
      </div>
    </CountContext.Provider>
  );
};

export default App1;
