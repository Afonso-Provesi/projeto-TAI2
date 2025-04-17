import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/TelaLogin.jsx";
import Agenda from "./pages/Calendario.jsx";
import CadastroPacientes from "./Pages/CadastroPacientes";
import Sobre from "./pages/Sobre";
import MainLayout from "./Pages/layouts/MainLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/cadastro" element={<CadastroPacientes />} />
          <Route path="/sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
