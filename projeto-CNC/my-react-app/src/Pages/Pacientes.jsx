import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css"

function Pacientes() {
  const navigate = useNavigate();

  const handleNovo = () => {
    navigate("/pacientes/novo"); // Correto, com barra
  };

  const handleVer = (id) => {
    navigate(`/paciente/${id}`);
  };

  return (
    <div className="pagina">
      <div className="cabecalho">
        <h1 className="titulo">Lista de Pacientes</h1>
        <button className="botao-novo" onClick={handleNovo}>Novo Pedido</button>
      </div>

      <div className="tabela-container">
        <table className="tabela">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>João Silva</td>
              <td>(11) 99999-9999</td>
              <td>joao@email.com</td>
              <td><span className="status">Ativo</span></td>
              <td>
                <button className="botao-ver" onClick={() => handleVer(1)}>Ver</button>
              </td>
            </tr>
            <tr>
              <td>Maria Souza</td>
              <td>(11) 98888-8888</td>
              <td>maria@email.com</td>
              <td><span className="status">Ativo</span></td>
              <td>
                <button className="botao-ver" onClick={() => handleVer(2)}>Ver</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Pacientes;
