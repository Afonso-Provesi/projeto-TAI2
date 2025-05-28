import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Agenda from './Pages/Agenda';
import ListaPacientes from './Pages/Pacientes';
import CadastroPacientes from './Pages/CadastroPacientes';
import Sobre from './Pages/Sobre';
import DetalhesPacientes from './Pages/DetalhesPacientes';
import Cadastro from './Pages/TelaCadastro'
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`content ${isSidebarOpen ? '' : 'content-expanded'}`}>
          <Routes>
            <Route path="/" element={<Agenda />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/pacientes" element={<ListaPacientes />} />
            <Route path="/pacientes/novo" element={<CadastroPacientes />} />
            <Route path="/paciente/:id" element={<DetalhesPacientes />} />          
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
