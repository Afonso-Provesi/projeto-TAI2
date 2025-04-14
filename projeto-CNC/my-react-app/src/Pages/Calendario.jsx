import React, { useState, useEffect } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "./components/Components-Calendario-css.css";
import {
  FaCalendarAlt,
  FaPlus,
  FaTrash,
  FaCog,
} from "react-icons/fa";

const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

// Funções para localStorage
const salvarEventosLocal = (agendas) => {
  localStorage.setItem("agendasSalvas", JSON.stringify(agendas));
};

const carregarEventosLocal = () => {
  const dados = localStorage.getItem("agendasSalvas");
  return dados ? JSON.parse(dados) : null;
};

function Calendario() {
  const [agendas, setAgendas] = useState([
    { nome: "Murilo Zucato", eventos: [] },
  ]);
  const [agendaSelecionada, setAgendaSelecionada] = useState(0);
  const [eventSelected, setEventSelected] = useState(null);
  const [novoEvento, setNovoEvento] = useState(null);
  const [tituloEvento, setTituloEvento] = useState("");
  const [endTime, setEndTime] = useState("");
  const [view, setView] = useState("week");

  useEffect(() => {
    const dadosSalvos = carregarEventosLocal();
    if (dadosSalvos) setAgendas(dadosSalvos);
  }, []);

  useEffect(() => {
    salvarEventosLocal(agendas);
  }, [agendas]);

  useEffect(() => {
    const escFunction = (e) => {
      if (e.key === "Escape") {
        setNovoEvento(null);
        setEventSelected(null);
      }
    };
    window.addEventListener("keydown", escFunction);
    return () => window.removeEventListener("keydown", escFunction);
  }, []);

  const eventMove = ({ event, start, end }) => {
    const updatedAgendas = agendas.map((agenda, index) => {
      if (index === agendaSelecionada) {
        const eventosAtualizados = agenda.eventos.map((e) =>
          e.id === event.id ? { ...e, start, end } : e
        );
        return { ...agenda, eventos: eventosAtualizados };
      }
      return agenda;
    });

    setAgendas(updatedAgendas);
  };

  const handleSelectSlot = ({ start, end }) => {
    setNovoEvento({ start, end });
    setTituloEvento("");
    setEndTime(moment(end).format("YYYY-MM-DDTHH:mm"));
  };

  const handleSalvarNovoEvento = () => {
    if (!tituloEvento.trim()) return;

    const endParsed = moment(endTime).toDate();

    const novo = {
      id: new Date().getTime(),
      title: tituloEvento,
      start: novoEvento.start,
      end: endParsed,
    };

    const updatedAgendas = agendas.map((agenda, index) => {
      if (index === agendaSelecionada) {
        return {
          ...agenda,
          eventos: [...agenda.eventos, novo],
        };
      }
      return agenda;
    });

    setAgendas(updatedAgendas);
    setNovoEvento(null);
    setTituloEvento("");
  };

  const handleDeletarAgenda = () => {
    if (agendas.length <= 1) return;
    const novasAgendas = agendas.filter((_, i) => i !== agendaSelecionada);
    setAgendas(novasAgendas);
    setAgendaSelecionada(0);
  };

  const handleAdicionarAgenda = () => {
    const nome = prompt("Digite o nome da nova agenda:");
    if (nome) {
      setAgendas([...agendas, { nome, eventos: [] }]);
      setAgendaSelecionada(agendas.length); // seleciona nova agenda
    }
  };
  const handleSelectEvent = (event) => {
    setEventSelected(event); // Atualiza o evento selecionado no estado
  };
  
  const handleDeleteEvent = () => {
    // Atualiza o estado de agendas removendo o evento
    const updatedAgendas = agendas.map((agenda, index) => {
      if (index === agendaSelecionada) {
        const updatedEventos = agenda.eventos.filter((e) => e.id !== eventSelected.id);
        return {
          ...agenda,
          eventos: updatedEventos,
        };
      }
      return agenda;
    });
  
    // Atualiza o estado com as agendas modificadas
    setAgendas(updatedAgendas);
    setEventSelected(null); // Fecha o modal
  };

  return (
    <div className="container">
      <div style={{display:"flex",height:"100vh"}}>
        <div className="sidebar">
          <h2><FaCalendarAlt /> Agenda</h2>

          <select
            value={agendaSelecionada}
            onChange={(e) => setAgendaSelecionada(Number(e.target.value))}
          >
            {agendas.map((agenda, index) => (
              <option key={index} value={index}>
                {agenda.nome}
              </option>
            ))}
          </select>

          <button onClick={handleAdicionarAgenda}>
            <FaPlus /> Nova Agenda
          </button>

          <button onClick={handleDeletarAgenda}>
            <FaTrash /> Deletar Agenda
          </button>

          <button>
            <FaCog /> Configurações
          </button>
        </div>

        <div style={{flex: 1, padding: "16px"}} className="main-content">
          <DragAndDropCalendar
            view={view}
            onView={(newView) => setView(newView)}
            defaultDate={moment().toDate()}
            events={agendas[agendaSelecionada].eventos}
            localizer={localizer}
            resizable
            selectable
            onEventDrop={eventMove}
            onEventResize={eventMove}
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleSelectEvent}
            className="calendar"
            style={{height: "100%"}}
          />

        {eventSelected && (
              <div className="modal-overlay">
                <div className="modal">
                  <h3>Detalhes do Evento</h3>
                  <p><strong>Nome:</strong> {eventSelected.title}</p>
                  <p><strong>Início:</strong> {moment(eventSelected.start).format("DD/MM/YYYY HH:mm")}</p>
                  <p><strong>Fim:</strong> {moment(eventSelected.end).format("DD/MM/YYYY HH:mm")}</p>
                  <p><strong>Agenda:</strong> {agendas[agendaSelecionada].nome}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
                    <button onClick={() => setEventSelected(null)}>Fechar</button>
                    {/* Botão Deletar */}
                    <button
                      style={{ backgroundColor: "#d9534f", color: "white" }}
                      onClick={handleDeleteEvent} // Chama a função de deletar
                    >
                      Deletar
                    </button>
                  </div>
                </div>
              </div>
          )};
          {novoEvento && (
            <div className="modal-overlay">
              <div className="modal">
                <h3>Novo Evento</h3>
                <p>Início: {moment(novoEvento.start).format("DD/MM/YYYY HH:mm")}</p>
                <label>Término:</label>
                <input
                  type="datetime-local"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Título"
                  value={tituloEvento}
                  onChange={(e) => setTituloEvento(e.target.value)}
                />
                <div style={{ textAlign: "right" }}>
                  <button onClick={handleSalvarNovoEvento}>Salvar</button>
                  <button onClick={() => setNovoEvento(null)}>Cancelar</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Calendario;
