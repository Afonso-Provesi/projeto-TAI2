import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/TelaLogin.css";

const API_BASE = "http://localhost:8000";

function TelaLogin() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!usuario || !senha) {
      alert("Preencha usuário e senha");
      return;
    }

    fetch(`${API_BASE}/usuarios/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: usuario, senha }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Usuário ou senha inválidos");
        return res.json();
      })
      .then((data) => {
        alert(data.msg || "Login realizado com sucesso!");
        navigate("/agenda");
      })
      .catch((err) => {
        alert(err.message);
      });
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
        <button type="submit" style={{ marginBottom: "10px" }}>
          Entrar
        </button>
        <button type="button" onClick={() => navigate("/cadastro")}>
          Cadastrar-se
        </button>
      </form>
    </div>
  );
}

export default TelaLogin;
