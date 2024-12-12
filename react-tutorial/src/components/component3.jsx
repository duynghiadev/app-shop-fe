import { useContext } from "react";
import { CountContext } from "../App1";

const Component3 = () => {
  const { count, handleIncrease } = useContext(CountContext);
  console.log("count:", count);

  return (
    <div>
      <p>{count}</p>
      <p>Component 3</p>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
};

export default Component3;
