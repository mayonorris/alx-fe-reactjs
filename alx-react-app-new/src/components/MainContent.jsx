// src/components/MainContent.jsx
export default function MainContent() {
  return (
    <main
      style={{
        padding: "10px",   // <-- include "10px"
        margin: "10px",    // <-- include "10px"
        lineHeight: 1.6,
      }}
    >
      <p style={{ margin: 0 }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
}
