import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./components/TelaLogin.css";

function TelaLogin() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simples verificação fictícia
    if (usuario && senha) {
      navigate("/agenda");
    } else {
      alert("Preencha usuário e senha");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="titulo">Login</h2>
        <input
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default TelaLogin;
