import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { PacienteContext } from "../context/PacienteContext";

function DetalhesPacientes() {
  const { id } = useParams();
  const { pacientes } = useContext(PacienteContext);
  const paciente = pacientes.find((p) => p.id === parseInt(id));
  const [examesEnviados, setExamesEnviados] = useState([]);

  const handleUpload = (e) => {
    const arquivos = Array.from(e.target.files);
    setExamesEnviados([...examesEnviados, ...arquivos]);
  };

  if (!paciente) return <p style={{ padding: "2rem", color: "black" }}>Paciente não encontrado.</p>;

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", color: "#000" }}>
      {/* Cabeçalho */}
      <div style={{ marginBottom: "1rem", fontSize: "1.5rem", fontWeight: "bold" }}>
        Pedido #{paciente.id} <span style={{ color: "#888", fontWeight: "normal" }}>Nº Manager #{paciente.id + 100}</span>
      </div>

      {/* Grid principal */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #ddd",
        paddingBottom: "1.5rem",
        marginBottom: "2rem"
      }}>
        {/* Informações */}
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: "1rem", marginBottom: "1rem", color: "#444" }}>Informações</h3>
          <p><strong>Clínica:</strong> Clínica Exemplo</p>
          <p><strong>Criação do Pedido:</strong> {new Date(paciente.dataCadastro).toLocaleString()}</p>
          <p><strong>Modo de Entrega:</strong> -</p>
          <p><strong>Data de Entrega:</strong> -</p>
          <p><strong>Endereço de Entrega:</strong> {paciente.endereco}</p>
        </div>

        {/* Paciente */}
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: "1rem", marginBottom: "1rem", color: "#444" }}>Paciente</h3>
          <p style={{ fontWeight: "bold", color: "#d18b00" }}>{paciente.nome}</p>
          <p><strong>Idade:</strong> -</p>
          <p><strong>Gênero:</strong> -</p>
          <p><strong>Telefone:</strong> {paciente.telefone}</p>
        </div>

        {/* Dentista */}
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: "1rem", marginBottom: "1rem", color: "#444" }}>Dentista</h3>
          <p style={{ fontWeight: "bold", color: "#d18b00" }}>Dentista Exemplo</p>
          <p><strong>Telefone:</strong> -</p>
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
            <button style={btnStyle}> Postar para Dentista</button>
            <button style={btnStyle}> Postar para Paciente</button>
          </div>
        </div>
      </div>

      {/* Seções adicionais */}
      <div>
        <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Observações</h3>
        <p><strong>Procedimento:</strong> {paciente.procedimento}</p>
        <p><strong>Exames:</strong> {paciente.exames}</p>
        <p><strong>Orçamento:</strong> R$ {parseFloat(paciente.orcamento).toFixed(2)}</p>
      </div>

      {/* Upload de Exames */}
      <div style={{ marginTop: "2rem" }}>
        <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Enviar novos exames</h3>
        <input type="file" multiple onChange={handleUpload} accept=".jpg,.jpeg,.png,.dcm" />
        <ul>
          {examesEnviados.map((file, idx) => (
            <li key={idx}>{file.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const btnStyle = {
  backgroundColor: "#f2f2f2",
  border: "1px solid #ccc",
  padding: "0.4rem 0.8rem",
  fontSize: "0.9rem",
  cursor: "pointer",
  borderRadius: "4px",
  color: "black"
};

export default DetalhesPacientes;
