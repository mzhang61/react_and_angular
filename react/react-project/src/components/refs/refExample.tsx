import { useRef, useEffect } from "react";

function RefExample() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus(); 
  }, []);

  const showInputValue = () => {
    alert(`You typed: ${inputRef.current?.value}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>useRef Example</h2>
      <input
        ref={inputRef} 
        type="text"
        placeholder="Type something..."
        style={{
          padding: "8px",
          fontSize: "16px",
          marginRight: "8px",
        }}
      />
      <button onClick={showInputValue}>Show Value</button>
    </div>
  );
}

export default RefExample;