import React from 'react';
import { useParams } from 'react-router-dom';

function DetalhesPaciente() {
  const { id } = useParams();

  return (
    <div className="page">
      <h1>Detalhes do Paciente {id}</h1>
      <p>Informações detalhadas do paciente vão aqui.</p>
    </div>
  );
}

export default DetalhesPaciente;
