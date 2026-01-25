// src/components/Counter.jsx
import { useState } from "react";

export default function Counter() {
  // initialize state
  const [count, setCount] = useState(0);

  // optional inline styles (keeps consistent with Task 0)
  const box = {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px",
    display: "inline-block",
    textAlign: "center",
  };
  const btn = {
    margin: "0 6px",
    padding: "6px 12px",
    cursor: "pointer",
  };

  return (
    <div style={box}>
      <p style={{ marginBottom: "10px" }}>Current Count: {count}</p>
      <button style={btn} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button style={btn} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button style={btn} onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
