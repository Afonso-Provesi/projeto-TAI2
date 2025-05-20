import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PacienteContext } from "../context/PacienteContext";

function ListaDePacientes() {
  const { pacientes } = useContext(PacienteContext);
  const navigate = useNavigate();

  const irParaDetalhes = (id) => {
    navigate(`/paciente/${id}`);
  };

  return (
    <div className="login-container">
      <div className="login-form" style={{ color: "black", width: "100%" }}>
        <h2 className="titulo">Lista de Pacientes</h2>

        {pacientes.length === 0 ? (
          <p>Nenhum paciente cadastrado.</p>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <th style={{ padding: "10px", textAlign: "left" }}>Nome do Paciente</th>
                <th style={{ padding: "10px", textAlign: "left" }}>Data do Cadastro</th>
                <th style={{ padding: "10px", textAlign: "left" }}>Status</th>
                <th style={{ padding: "10px", textAlign: "left" }}>Exames</th>
              </tr>
            </thead>
            <tbody>
              {pacientes.map((paciente) => (
                <tr
                  key={paciente.id}
                  onClick={() => irParaDetalhes(paciente.id)}
                  style={{ cursor: "pointer", borderBottom: "1px solid #ccc" }}
                >
                  <td style={{ padding: "10px" }}>{paciente.nome}</td>
                  <td style={{ padding: "10px" }}>{new Date(paciente.dataCadastro).toLocaleDateString()}</td>
                  <td style={{ padding: "10px" }}>
                    <span style={{ backgroundColor: "#ffcc00", padding: "4px 8px", borderRadius: "4px" }}>Aguardando</span>
                  </td>
                  <td style={{ padding: "10px" }}>
                    {paciente.exames ? paciente.exames.split(",").map((exame, i) => (
                      <span
                        key={i}
                        style={{
                          backgroundColor: "#f0ad4e",
                          color: "white",
                          padding: "4px 6px",
                          marginRight: "5px",
                          borderRadius: "3px",
                          fontSize: "12px"
                        }}
                      >
                        {exame.trim()}
                      </span>
                    )) : "Nenhum"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <button
          onClick={() => navigate("/pacientes/novo")}
          style={{ marginTop: "20px" }}
        >
          Cadastrar Novo Paciente
        </button>
      </div>
    </div>
  );
}

export default ListaDePacientes;