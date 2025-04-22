import React from "react";
import "../components/TelaLogin.css";

function Sobre() {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ color: "black", fontSize: "2rem", marginBottom: "1rem" }}>Sobre o MedAgenda</h1>
      
      <p style={{ color: "black", fontSize: "1.1rem", lineHeight: "1.6" }}>
        O <strong>MedAgenda</strong> é uma solução moderna e intuitiva para o gerenciamento de atendimentos clínicos,
        permitindo que consultórios, clínicas e profissionais de saúde organizem suas agendas de forma eficiente.
        Nosso objetivo é oferecer praticidade, segurança e agilidade no dia a dia de quem cuida da saúde.
      </p>

      <p style={{ color: "black", marginTop: "1.5rem" }}>
        <strong>Entre em contato conosco:</strong><br />
        📞 (11) 99999-1234<br />
        📧 contato@medagenda.com.br
      </p>
    </div>
  );
}

export default Sobre;
