import React, { useState, useEffect } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "./components/Components-Calendario-css.css";

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
    { nome: "Pessoa 1", eventos: [] },
    { nome: "Pessoa 2", eventos: [] },
  ]);

  const [agendaSelecionada, setAgendaSelecionada] = useState(0);
  const [eventSelected, setEventSelected] = useState(null);
  const [novoEvento, setNovoEvento] = useState(null);
  const [tituloEvento, setTituloEvento] = useState("");
  const [endTime, setEndTime] = useState("");

  // Carrega dados salvos
  useEffect(() => {
    const dadosSalvos = carregarEventosLocal();
    if (dadosSalvos) setAgendas(dadosSalvos);
  }, []);

  useEffect(() => {
    salvarEventosLocal(agendas);
  }, [agendas]);

  // Fecha modal com ESC
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

  const handleEventClick = (event) => {
    setEventSelected(event);
  };

  const handleEventClose = () => {
    setEventSelected(null);
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

  return (
    <div>
      <h2>Calendário</h2>
      <label>Selecionar agenda: </label>
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

      <DragAndDropCalendar
        defaultDate={moment().toDate()}
        defaultView="week"
        events={agendas[agendaSelecionada].eventos}
        localizer={localizer}
        resizable
        selectable
        onEventDrop={eventMove}
        onEventResize={eventMove}
        onSelectEvent={handleEventClick}
        onSelectSlot={handleSelectSlot}
        className="calendar"
      />

      {novoEvento && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Novo Evento</h3>
            <p>Início: {moment(novoEvento.start).format("DD/MM/YYYY HH:mm")}</p>
            <label>Horário de término:</label>
            <input
              type="datetime-local"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
            <input
              type="text"
              placeholder="Título do evento"
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
  );
}

export default Calendario;
