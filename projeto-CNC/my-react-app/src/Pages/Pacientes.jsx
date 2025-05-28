import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PacienteContext } from '../context/PacienteContext';
import "../App.css";

function Pacientes() {
  const navigate = useNavigate();
  const { pacientes } = useContext(PacienteContext);

  const handleNovo = () => {
    navigate("/pacientes/novo");
  };

  const handleVer = (id) => {
    navigate(`/paciente/${id}`);
  };

  return (
    <div className="pagina">
      <div className="cabecalho">
        <h1 className="titulo">Lista de Pacientes</h1>
        <button className="botao-novo" onClick={handleNovo}>Novo Paciente</button>
      </div>

      <div className="tabela-container">
        <table className="tabela">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Profissional da Saúde</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((paciente) => (
              <tr key={paciente.id}>
                <td>{paciente.nome}</td>
                <td>{paciente.telefone}</td>
                <td>{paciente.profissional}</td>
                <td>
                  <span className={`status ${paciente.status === 'Ativo' ? 'ativo' : 'inativo'}`}>
                    {paciente.status}
                  </span>
                </td>
                <td>
                  <button className="botao-ver" onClick={() => handleVer(paciente.id)}>Ver</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Pacientes;
