import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PacienteProvider } from './context/PacienteContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PacienteProvider>
    <App />
    </PacienteProvider>
  </StrictMode>,
)
