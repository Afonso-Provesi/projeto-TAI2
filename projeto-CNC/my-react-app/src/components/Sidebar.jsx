import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Sidebar({ toggleSidebar, isOpen }) {

  return (
    <div className={`sidebar ${isOpen ? '' : 'collapsed'}`}>
      <div className="toggle-area" onClick={toggleSidebar}>
        {isOpen ? '❮' : '❯'}
      </div>
      <div className="sidebar-content">
        {isOpen && <h2 className="logo">Minha Agenda</h2>}
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              <span className="icon">📅</span>
              {isOpen && 'Agenda'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/pacientes" className={({ isActive }) => isActive ? "active" : ""}>
              <span className="icon">👥</span>
              {isOpen && 'Pacientes'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobre" className={({ isActive }) => isActive ? "active" : ""}>
              <span className="icon">ℹ️</span>
              {isOpen && 'Sobre'}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
