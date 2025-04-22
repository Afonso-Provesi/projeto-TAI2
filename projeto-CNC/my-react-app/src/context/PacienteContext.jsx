import React, { createContext, useState } from "react";

export const PacienteContext = createContext();

export const PacienteProvider = ({ children }) => {
  const [pacientes, setPacientes] = useState([]);

  const adicionarPaciente = (paciente) => {
    setPacientes([...pacientes, paciente]);
  };

  return (
    <PacienteContext.Provider value={{ pacientes, adicionarPaciente }}>
      {children}
    </PacienteContext.Provider>
  );
};
