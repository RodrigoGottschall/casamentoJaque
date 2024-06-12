import React from "react";

function HeroImage() {
  return (
    <div
      style={{
        backgroundImage: "url(../assets/images/foto-casal.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "white", fontSize: "48px", textAlign: "center" }}>
        Jaque
      </h1>
    </div>
  );
}

export default HeroImage;
