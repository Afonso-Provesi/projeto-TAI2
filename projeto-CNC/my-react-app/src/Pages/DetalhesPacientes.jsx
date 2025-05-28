import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PacienteContext } from "../context/PacienteContext";
import "../App.css";

function DetalhesPaciente() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pacientes, atualizarStatus } = useContext(PacienteContext);

  const paciente = pacientes.find((p) => p.id === Number(id));

  if (!paciente) {
    return <div className="pagina"><h2>Paciente não encontrado.</h2></div>;
  }

  const toggleStatus = () => {
    const novoStatus = paciente.status === "Ativo" ? "Inativo" : "Ativo";
    atualizarStatus(paciente.id, novoStatus);
  };

  return (
    <div className="pagina">
      <div className="detalhes-container">
        <h2>Detalhes do Paciente</h2>

        <p><strong>Nome:</strong> {paciente.nome}</p>
        <p><strong>Telefone:</strong> {paciente.telefone}</p>
        <p><strong>Endereço:</strong> {paciente.endereco}</p>
        <p><strong>Profissional da Saúde:</strong> {paciente.profissional}</p>
        <p><strong>Procedimento:</strong> {paciente.procedimento}</p>
        <p><strong>Exames:</strong> {paciente.exames}</p>
        <p><strong>Orçamento:</strong> R$ {paciente.orcamento}</p>
        <p><strong>Status:</strong> 
          <span className={`status ${paciente.status === 'Ativo' ? 'ativo' : 'inativo'}`}>
            {paciente.status}
          </span>
        </p>

        <button onClick={toggleStatus} className="botao-status">
          {paciente.status === "Ativo" ? "Marcar como Inativo" : "Marcar como Ativo"}
        </button>

        <button onClick={() => navigate("/pacientes")} className="botao-voltar">
          Voltar
        </button>
      </div>
    </div>
  );
}

export default DetalhesPaciente;
