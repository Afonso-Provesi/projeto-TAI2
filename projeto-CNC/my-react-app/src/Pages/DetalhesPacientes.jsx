import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { usePacientes } from "../context/PacienteContext";

function DetalhesPaciente() {
  const { id } = useParams();
  const { pacientes } = usePacientes();
  const paciente = pacientes.find((p) => p.id === Number(id));
  const [examesUpload, setExamesUpload] = useState([]);

  const handleUpload = (e) => {
    const arquivos = Array.from(e.target.files);
    setExamesUpload([...examesUpload, ...arquivos]);
  };

  if (!paciente) return <p>Paciente não encontrado.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{paciente.nome}</h2>
      <p><strong>Endereço:</strong> {paciente.endereco}</p>
      <p><strong>Telefone:</strong> {paciente.telefone}</p>
      <p><strong>Procedimento:</strong> {paciente.procedimento}</p>
      <p><strong>Exames:</strong> {paciente.exames}</p>
      <p><strong>Orçamento:</strong> R$ {paciente.orcamento}</p>

      <hr />

      <h3>Exames enviados</h3>
      <input type="file" multiple onChange={handleUpload} accept=".jpg,.jpeg,.png,.dcm" />
      <ul>
        {examesUpload.map((file, idx) => (
          <li key={idx}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DetalhesPaciente;
