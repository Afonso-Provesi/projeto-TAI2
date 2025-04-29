import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/TelaLogin.jsx";
import Agenda from "./Pages/Calendario.jsx";
import CadastroPacientes from "./Pages/CadastroPacientes";
import Sobre from "./Pages/Sobre";
import MainLayout from "./Layout/MainLayout.jsx";
import Cadastrar from "./Pages/TelaCadastro.jsx";
import ListaPacientes from "./Pages/ListaDePacientes.jsx";

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastrar/>}/>
        <Route path="/cadastro" element={<CadastroPacientes />} />
        <Route path="/pacientes/:id" element={<DetalhesPaciente />} />
        <Route element={<MainLayout />}>
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/paciente" element={<ListaPacientes />} />
          <Route path="/sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
