import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Agenda from './Pages/Agenda';
import TelaLogin from './Pages/TelaLogin';
import ListaPacientes from './Pages/Pacientes';
import CadastroPacientes from './Pages/CadastroPacientes';
import Sobre from './Pages/Sobre';
import DetalhesPacientes from './Pages/DetalhesPacientes';
import Cadastro from './Pages/TelaCadastro';
import './App.css';

// Componente separado para acessar a localização atual
function AppContent() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Verifica se a tela atual é a de login
  const isLoginPage = location.pathname === '/';
  const isCadastroPage = location.pathname === '/cadastro';

  return (
    <div className="app">
      {/* Renderiza a Sidebar somente se não estiver na página de login */}
      {!isLoginPage && !isCadastroPage &&(
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}
      
      <div className={`content ${!isLoginPage && !isCadastroPage && !isSidebarOpen ? 'content-expanded' : ''}`}>
        <Routes>
          <Route path="/" element={<TelaLogin />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/pacientes" element={<ListaPacientes />} />
          <Route path="/pacientes/novo" element={<CadastroPacientes />} />
          <Route path="/paciente/:id" element={<DetalhesPacientes />} />
        </Routes>
      </div>
    </div>
  );
}

// Encapsula no Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;