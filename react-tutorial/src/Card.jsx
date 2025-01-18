import { useState } from "react";

const Card = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="card">
      {count}
      <button onClick={handleIncrease}>Increase count</button>
      <button onClick={handleDecrease}>Decrease count</button>
    </div>
  );
};

export default Card;
