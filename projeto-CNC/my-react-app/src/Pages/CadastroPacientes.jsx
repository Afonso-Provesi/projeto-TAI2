import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../components/TelaLogin.css"; 

function TelaCadastro() {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();
    if (usuario && email && senha) {
      alert("Cadastro realizado com sucesso!");
      navigate("/"); // Volta para a tela de login
    } else {
      alert("Preencha todos os campos");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleCadastro}>
        <h2 className="titulo">Cadastro</h2>
        <input
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
        <p className="cadastro-link">
          Já tem uma conta? <Link to="/">Voltar para login</Link>
        </p>
      </form>
    </div>
  );
}

export default CadastroPacientes;
