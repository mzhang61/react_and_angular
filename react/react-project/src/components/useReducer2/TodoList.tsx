import React, { useReducer, useState } from "react";

type Todo = { id: number; text: string; done: boolean };
type Action =
  | { type: "add"; text: string }
  | { type: "toggle"; id: number }
  | { type: "remove"; id: number };

function todoReducer(todos: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "add":
      return [...todos, { id: Date.now(), text: action.text, done: false }];
    case "toggle":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "remove":
      return todos.filter((todo) => todo.id !== action.id);
    default:
      return todos; 
  }
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, [] as Todo[]);
  const [input, setInput] = useState("");

  function handleAdd() {
    if (input.trim()) {
      dispatch({ type: "add", text: input });
      setInput("");
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>useReducer Todo List</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch({ type: "toggle", id: todo.id })}
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                cursor: "pointer", 
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: "remove", id: todo.id })}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}