import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { PacienteContext } from "../context/PacienteContext";

function CadastroPacientes() {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [procedimento, setProcedimento] = useState("");
  const [exames, setExames] = useState("");
  const [orcamento, setOrcamento] = useState("");

  const navigate = useNavigate();
  const { adicionarPaciente } = useContext(PacienteContext);

  const handleCadastro = (e) => {
    e.preventDefault();

    if (nome && endereco && telefone && procedimento && orcamento) {
      const novoPaciente = {
        id: Date.now(),
        nome,
        endereco,
        telefone,
        procedimento,
        exames,
        orcamento,
        dataCadastro: new Date().toISOString()
      };

      adicionarPaciente(novoPaciente);
      alert("Paciente cadastrado com sucesso!");
      navigate("/paciente");
    } else {
      alert("Preencha todos os campos obrigatórios");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleCadastro}>
        <h2 className="titulo">Cadastro de Paciente</h2>

        <input
          type="text"
          placeholder="Nome do Paciente"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Endereço"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Procedimentos"
          value={procedimento}
          onChange={(e) => setProcedimento(e.target.value)}
        />
        <input
          type="text"
          placeholder="Exames"
          value={exames}
          onChange={(e) => setExames(e.target.value)}
        />
        <input
          type="number"
          placeholder="Orçamento (R$)"
          value={orcamento}
          onChange={(e) => setOrcamento(e.target.value)}
          step="0.01"
        />

        <button type="submit">Cadastrar Paciente</button>
      </form>
    </div>
  );
}

export default CadastroPacientes;