import React, { createContext, useState, useEffect } from "react";

// Criamos o contexto
export const PacienteContext = createContext();

// URL base da sua API FastAPI
const API_BASE = "http://localhost:8000";

export const PacienteProvider = ({ children }) => {
  const [pacientes, setPacientes] = useState([]);

  // Carrega a lista de pacientes da API ao iniciar
  useEffect(() => {
    fetch(`${API_BASE}/pacientes/`)
      .then((res) => res.json())
      .then((data) => setPacientes(data))
      .catch((err) => console.error("Erro ao buscar pacientes:", err));
  }, []);

  // Cadastra novo paciente na API
  const adicionarPaciente = (paciente) => {
    fetch(`${API_BASE}/pacientes/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paciente),
    })
      .then((res) => res.json())
      .then((novoPaciente) => {
        setPacientes((prev) => [...prev, novoPaciente]);
      })
      .catch((err) => console.error("Erro ao cadastrar paciente:", err));
  };

  // Atualiza status (Ativo/Inativo) do paciente na API
  const atualizarStatus = (id, novoStatus) => {
    fetch(`${API_BASE}/pacientes/${id}/status?status=${novoStatus}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((pacienteAtualizado) => {
        setPacientes((prev) =>
          prev.map((p) =>
            p.id === id ? pacienteAtualizado : p
          )
        );
      })
      .catch((err) => console.error("Erro ao atualizar status:", err));
  };

  return (
    <PacienteContext.Provider
      value={{ pacientes, adicionarPaciente, atualizarStatus }}
    >
      {children}
    </PacienteContext.Provider>
  );
};