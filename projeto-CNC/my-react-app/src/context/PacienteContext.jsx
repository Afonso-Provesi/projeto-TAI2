import React, { createContext, useState } from "react";

export const PacienteContext = createContext();

export const PacienteProvider = ({ children }) => {
  const [pacientes, setPacientes] = useState([]);

  const adicionarPaciente = (paciente) => {
    setPacientes((prev) => [...prev, paciente]);
  };

  const atualizarStatus = (id, novoStatus) => {
    setPacientes((prev) =>
      prev.map((paciente) =>
        paciente.id === id ? { ...paciente, status: novoStatus } : paciente
      )
    );
  };

  return (
    <PacienteContext.Provider
      value={{ pacientes, adicionarPaciente, atualizarStatus }}
    >
      {children}
    </PacienteContext.Provider>
  );
};
