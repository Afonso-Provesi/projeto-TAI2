import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PacienteContext } from "../context/PacienteContext";
import "../components/TelaLogin.css";

function ListaPacientes() {
  const { pacientes } = useContext(PacienteContext);
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Pacientes Cadastrados</h2>
        <button onClick={() => navigate("/pacientes/novo")} style={{ padding: "0.5rem 1rem" }}>
          Novo Paciente
        </button>
      </div>
      <ul style={{ marginTop: "1rem" }}>
        {!pacientes || pacientes.length === 0 ? (
          <p>Nenhum paciente cadastrado.</p>
        ) : (
          pacientes.map((paciente) => (
            <li
              key={paciente.id || paciente.nome}
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            >
              <strong>{paciente.nome}</strong> <br />
              <small>Cadastrado em: {new Date(paciente.dataCadastro).toLocaleDateString()}</small>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ListaPacientes;
