import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../components/TelaLogin.css";

function CadastroPacientes() {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [procedimento, setProcedimento] = useState("");
  const [exames, setExames] = useState("");
  const [orcamento, setOrcamento] = useState("");
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();

    if (nome && endereco && telefone && procedimento && orcamento) {
      alert("Paciente cadastrado com sucesso!");
      navigate("/agenda"); 
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
          placeholder="Procedimento"
          value={procedimento}
          onChange={(e) => setProcedimento(e.target.value)}
        />
        <textarea
          placeholder="Exames"
          value={exames}
          onChange={(e) => setExames(e.target.value)}
          rows="3"
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