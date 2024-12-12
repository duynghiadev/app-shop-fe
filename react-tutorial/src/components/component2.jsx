import { useReducer } from "react";
import Component3 from "./component3";
import reducer from "../reducers";

const Component2 = () => {
  const [state, dispatch] = useReducer(reducer, { count: 1 });

  return (
    <div>
      <p> Component 2</p>
      <Component3 />
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREASE" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>-</button>
    </div>
  );
};

export default Component2;
