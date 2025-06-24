import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/TelaLogin.css";

const API_BASE = "http://localhost:8000";

function CadastroEmpresa() {
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_BASE}/usuarios/cadastrar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ empresa, email, senha }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao cadastrar, verifique os dados");
        return res.json();
      })
      .then((data) => {
        alert(data.msg || "Cadastro realizado com sucesso!");
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="titulo">Cadastro da Empresa</h2>
        <input
          type="text"
          placeholder="Nome da Empresa"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroEmpresa;