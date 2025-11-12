import React, { useState, useCallback } from "react";

// first onClick is a prop. The second one is a function.
const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
});

function CallBack() {
  const [count, setCount] = useState(0);

  // ✅ use useCallback，prevent Child rendering
  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Child onClick={handleClick} />
    </div>
  );
}

export default CallBack;