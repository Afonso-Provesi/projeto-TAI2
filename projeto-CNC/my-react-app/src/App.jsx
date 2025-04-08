import React from 'react'
import './App.css'
import Calendario from './Pages/Calendario.jsx';

function App() {
  const handleClick = () => {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  };

  return (
    <>
      <Calendario/>
    </>
  )
}

export default App
