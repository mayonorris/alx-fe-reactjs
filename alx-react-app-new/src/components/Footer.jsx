// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "10px",   // <-- include "10px"
        backgroundColor: "#111827",
        color: "white",
        marginTop: "10px", // <-- include "10px"
      }}
    >
      <p style={{ margin: 0 }}>© 2023 City Lovers</p>
    </footer>
  );
}
