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

  if (!paciente) return <p>Paciente não encontrado.</p>;

  return (
    <div style={{ padding: "2rem", color: "black" }}>
      <h2>Detalhes do Paciente</h2>
      <p><strong>Nome:</strong> {paciente.nome}</p>
      <p><strong>Endereço:</strong> {paciente.endereco}</p>
      <p><strong>Telefone:</strong> {paciente.telefone}</p>
      <p><strong>Procedimento:</strong> {paciente.procedimento}</p>
      <p><strong>Exames:</strong> {paciente.exames}</p>
      <p><strong>Orçamento:</strong> R$ {parseFloat(paciente.orcamento).toFixed(2)}</p>
      <p><strong>Data de Cadastro:</strong> {new Date(paciente.dataCadastro).toLocaleString()}</p>

      <hr />

      <h3>Enviar novos exames</h3>
      <input type="file" multiple onChange={handleUpload} accept=".jpg,.jpeg,.png,.dcm" />
      <ul>
        {examesEnviados.map((file, idx) => (
          <li key={idx}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DetalhesPacientes;
