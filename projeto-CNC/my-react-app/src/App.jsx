import React from 'react';
import './App.css';
import Calendario from './Pages/Calendario.jsx';

function App() {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li><a href="#">Calendário</a></li>
          <li><a href="#">Configurações</a></li>
          <li><a href="#">Sobre</a></li>
        </ul>
      </aside>
      <main className="main-content">
        <Calendario />
      </main>
    </div>
  );
}

export default App;
