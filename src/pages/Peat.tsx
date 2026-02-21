import { useState } from "react";

const Peat = () => {
  const [number, setNumber] = useState<number>(0);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        background: "var(--background-color)",
        color: "var(--text-color)",
        paddingTop: "var(--header-height)",
      }}
    >
      <h1>/peat</h1>
      <div style={{ fontSize: "4rem", fontWeight: 700 }}>{number}</div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => setNumber((n) => n - 1)}>-</button>
        <button onClick={() => setNumber((n) => n + 1)}>+</button>
      </div>
      <a href="/">Back home</a>
    </div>
  );
};

export default Peat;
