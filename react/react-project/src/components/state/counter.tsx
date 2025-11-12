import { useState } from "react";

function Counter() {
    const [count, setCount] = useState<number>(0);

    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div style = {{ textAlign: "center", marginTop: "40px"}}>
            <h2>Count: {count}</h2>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;