import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PacienteContext } from "../context/PacienteContext";

function ListaDePacientes() {
  const { pacientes } = useContext(PacienteContext);
  const [pacienteSelecionado, setPacienteSelecionado] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-form" style={{ color: "black" }}>
        <h2 className="titulo">Lista de Pacientes</h2>

        {pacientes.length === 0 ? (
          <p>Nenhum paciente cadastrado.</p>
        ) : (
          <ul>
            {pacientes.map((paciente) => (
              <li
                key={paciente.id}
                style={{ cursor: "pointer", marginBottom: "10px" }}
                onClick={() => setPacienteSelecionado(paciente)}
              >
                {paciente.nome} - {new Date(paciente.dataCadastro).toLocaleDateString()}
              </li>
            ))}
          </ul>
        )}

        <button onClick={() => navigate("/pacientes/novo")}>
          Cadastrar Novo Paciente
        </button>

        {pacienteSelecionado && (
          <div style={{ marginTop: "20px", borderTop: "1px solid #ccc", paddingTop: "10px" }}>
            <h3>Detalhes do Paciente</h3>
            <p><strong>Nome:</strong> {pacienteSelecionado.nome}</p>
            <p><strong>Endereço:</strong> {pacienteSelecionado.endereco}</p>
            <p><strong>Telefone:</strong> {pacienteSelecionado.telefone}</p>
            <p><strong>Procedimento:</strong> {pacienteSelecionado.procedimento}</p>
            <p><strong>Exames:</strong> {pacienteSelecionado.exames}</p>
            <p><strong>Orçamento:</strong> R$ {parseFloat(pacienteSelecionado.orcamento).toFixed(2)}</p>
            <p><strong>Data de Cadastro:</strong> {new Date(pacienteSelecionado.dataCadastro).toLocaleString()}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListaDePacientes;
