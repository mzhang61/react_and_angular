import React, { useReducer } from "react";

type State = { count: number};
type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" }; 

function counterReducer(state: State, action: Action): State {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return { count: 0 };
        default:
            return state;
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>useReducer Counter</h1>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>＋</button>
      <button onClick={() => dispatch({ type: "decrement" })}>－</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
    )
}