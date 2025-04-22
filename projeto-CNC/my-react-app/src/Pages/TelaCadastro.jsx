import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/TelaLogin.css'; 

function CadastroEmpresa() {
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ empresa, email, senha });
    alert('Cadastro realizado com sucesso!');
    navigate('/');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className='titulo'>Cadastro da Empresa</h2>
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
