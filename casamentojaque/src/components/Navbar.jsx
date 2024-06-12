import React from "react";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#f0e6f6", padding: "15px" }}>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <li>
          <a href="/" style={{ textDecoration: "none", color: "#6a1b9a" }}>
            Início
          </a>
        </li>
        <li>
          <a
            href="/nossa-historia"
            style={{ textDecoration: "none", color: "#6a1b9a" }}
          >
            Nossa História
          </a>
        </li>
        <li>
          <a
            href="/confirmar-presenca"
            style={{ textDecoration: "none", color: "#6a1b9a" }}
          >
            Confirmar Presença
          </a>
        </li>
        <li>
          <a
            href="/presentes"
            style={{ textDecoration: "none", color: "#6a1b9a" }}
          >
            Presentes
          </a>
        </li>
        <li>
          <a href="/local" style={{ textDecoration: "none", color: "#6a1b9a" }}>
            Local
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
