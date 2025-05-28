import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { PacienteContext } from "../context/PacienteContext";

function CadastroPacientes() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [profissional, setProfissional] = useState("");
  const [procedimento, setProcedimento] = useState("");
  const [exames, setExames] = useState("");
  const [orcamento, setOrcamento] = useState("");

  const navigate = useNavigate();
  const { adicionarPaciente } = useContext(PacienteContext);

  const handleCadastro = (e) => {
    e.preventDefault();

    if (nome && telefone && profissional && procedimento) {
      const novoPaciente = {
        id: Date.now(),
        nome,
        telefone,
        endereco,
        profissional,
        procedimento,
        exames,
        orcamento,
        status: "Ativo",
        dataCadastro: new Date().toISOString()
      };

      adicionarPaciente(novoPaciente);
      alert("Paciente cadastrado com sucesso!");
      navigate("/pacientes");
    } else {
      alert("Preencha os campos obrigatórios.");
    }
  };

  return (
    <div className="pagina">
      <form className="form-cadastro" onSubmit={handleCadastro}>
        <h2 className="titulo">Novo Paciente</h2>

        <div className="secao">
          <h3>Dados Pessoais</h3>
          <input type="text" placeholder="Nome do Paciente *" value={nome} onChange={(e) => setNome(e.target.value)} />
          <input type="text" placeholder="Telefone *" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
          <input type="text" placeholder="Endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
        </div>

        <div className="secao">
          <h3>Informações de Atendimento</h3>
          <input type="text" placeholder="Profissional da Saúde *" value={profissional} onChange={(e) => setProfissional(e.target.value)} />
          <input type="text" placeholder="Procedimento *" value={procedimento} onChange={(e) => setProcedimento(e.target.value)} />
          <input type="text" placeholder="Exames" value={exames} onChange={(e) => setExames(e.target.value)} />
        </div>

        <div className="secao">
          <h3>Financeiro</h3>
          <input type="number" placeholder="Orçamento (R$)" value={orcamento} onChange={(e) => setOrcamento(e.target.value)} step="0.01" />
        </div>

        <button type="submit" className="botao-novo">Cadastrar Paciente</button>
      </form>
    </div>
  );
}

export default CadastroPacientes;
