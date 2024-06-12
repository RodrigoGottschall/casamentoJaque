import React, { useState } from "react";

function RsvpForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar os dados do formulário
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: "30px", maxWidth: "500px", margin: "0 auto" }}
    >
      <h2
        style={{ fontSize: "30px", marginBottom: "20px", textAlign: "center" }}
      >
        Confirmar Presença
      </h2>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="nome" style={{ display: "block", marginBottom: "5px" }}>
          Nome:
        </label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ width: "100%", padding: "10px", border: "1px solid #ccc" }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="email"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", border: "1px solid #ccc" }}
        />
      </div>
      <button
        type="submit"
        style={{
          backgroundColor: "#6a1b9a",
          color: "white",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Confirmar
      </button>
    </form>
  );
}

export default RsvpForm;
