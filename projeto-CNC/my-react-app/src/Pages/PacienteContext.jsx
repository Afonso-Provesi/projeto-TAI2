// context/PacienteContext.js
import { createContext, useContext, useState } from "react";

export const PacienteContext = createContext();

export const PacienteProvider = ({ children }) => {
  const [pacientes, setPacientes] = useState([]);

  const adicionarPaciente = (paciente) => {
    const novoPaciente = {
      ...paciente,
      id: Date.now(), // id único
      dataCadastro: new Date().toISOString()
    };
    setPacientes((prev) => [...prev, novoPaciente]);
  };

  return (
    <PacienteContext.Provider value={{ pacientes, adicionarPaciente }}>
      {children}
    </PacienteContext.Provider>
  );
};

export const usePacientes = () => useContext(PacienteContext);
