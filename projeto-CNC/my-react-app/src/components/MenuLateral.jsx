import { Link } from "react-router-dom";
import "./Menu-Lateral.css";

export default function MenuLateral() {
  return (
    <div className="sidebar">
      <h2 className="logo">Minha Agenda</h2>
      <nav>
        <Link to="/agenda">Agenda</Link>
        <Link to="/pacientes">Cadastro de Pacientes</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
    </div>
  );
}
