import React from "react";
import './Components-Calendario-css.css'
const EventModel = ({eventos, onClode}) => {
    return (
        <div classname = "model">
            <div classname="model-content">    
                <h2>{eventos.title}</h2>
                <p>{eventos.desc}</p>
                <p>Início: {eventos.start.toLocaleString()}</p>
                <p>Fim: {eventos.end.toLocaleString()}</p>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    )
}

export default EventModel;