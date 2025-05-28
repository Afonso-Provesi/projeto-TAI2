import React, { useState, useEffect } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import { FaCalendarAlt, FaPlus, FaTrash, FaCog } from "react-icons/fa";
import "../App.css"

const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

const gerarCorAleatoria = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

const salvarEventosLocal = (agendas) => {
  localStorage.setItem("agendasSalvas", JSON.stringify(agendas));
};

const carregarEventosLocal = () => {
  const dados = localStorage.getItem("agendasSalvas");
  return dados ? JSON.parse(dados) : null;
};

function Calendario() {
  const [dataAtual, setDataAtual] = useState(new Date());
  const [agendas, setAgendas] = useState([
    { nome: "Murilo Zucato", cor: gerarCorAleatoria(), eventos: [] },
  ]);
  const [agendaSelecionada, setAgendaSelecionada] = useState(0);
  const [eventSelected, setEventSelected] = useState(null);
  const [novoEvento, setNovoEvento] = useState(null);
  const [tituloEvento, setTituloEvento] = useState("");
  const [duracaoMinutos, setDuracaoMinutos] = useState(30);
  const [view, setView] = useState("week");
  const [configAberta, setConfigAberta] = useState(false);

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
        setConfigAberta(false);
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

  const handleSelectSlot = ({ start }) => {
    setNovoEvento({ start });
    setTituloEvento("");
  };

  const handleSalvarNovoEvento = () => {
    if (!tituloEvento.trim()) return;

    const start = novoEvento.start;
    const end = moment(start).add(duracaoMinutos, "minutes").toDate();

    const novo = {
      id: new Date().getTime(),
      title: tituloEvento,
      start,
      end,
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
    setDuracaoMinutos(30);
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
      setAgendas([
        ...agendas,
        { nome, eventos: [], cor: gerarCorAleatoria() },
      ]);
      setAgendaSelecionada(agendas.length);
    }
  };

  const handleSelectEvent = (event) => {
    setEventSelected(event);
  };

  const handleDeleteEvent = () => {
    const updatedAgendas = agendas.map((agenda, index) => {
      if (index === agendaSelecionada) {
        const updatedEventos = agenda.eventos.filter(
          (e) => e.id !== eventSelected.id
        );
        return {
          ...agenda,
          eventos: updatedEventos,
        };
      }
      return agenda;
    });

    setAgendas(updatedAgendas);
    setEventSelected(null);
  };

  const eventPropGetter = () => {
    const corAgenda = agendas[agendaSelecionada].cor;
    return {
      style: {
        backgroundColor: corAgenda,
        borderRadius: "6px",
        color: "white",
        border: "none",
        padding: "2px 6px",
      },
    };
  };

  const corAgendaAtual = agendas[agendaSelecionada].cor;

  const handleTrocarCor = (novaCor) => {
    const novasAgendas = agendas.map((agenda, index) =>
      index === agendaSelecionada ? { ...agenda, cor: novaCor } : agenda
    );
    setAgendas(novasAgendas);
  };

  return (
    <div className="container">
      <div style={{ display: "flex", height: "100vh" }}>
        <div className="sidebar-agenda">
          <h2>
            <FaCalendarAlt /> Agenda
          </h2>

          <select
            value={agendaSelecionada}
            onChange={(e) => setAgendaSelecionada(Number(e.target.value))}
            style={{widht:"50px",height:"20px"}}
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

          <button onClick={() => setConfigAberta(!configAberta)}>
            <FaCog /> Configurações
          </button>

          {configAberta && (
            <div style={{ marginTop: "1rem" }}>
              <label>Mudar Cor da Agenda:</label>
              <input
                type="color"
                value={corAgendaAtual}
                onChange={(e) => handleTrocarCor(e.target.value)}
              />
            </div>
          )}
        </div>

        <div
          style={{ flex: 1, padding: "16px" }}
          className="main-content"
        >
          <DragAndDropCalendar
            view={view}
            onNavigate={(newDate) => setDataAtual(newDate)}
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
            eventPropGetter={eventPropGetter}
            style={{ height: "100%" }}
          />

          {eventSelected && (
            <div className="modal-overlay">
              <div className="modal">
                <h3>Detalhes do Evento</h3>
                <p>
                  <strong>Nome:</strong> {eventSelected.title}
                </p>
                <p>
                  <strong>Início:</strong>{" "}
                  {moment(eventSelected.start).format("DD/MM/YYYY HH:mm")}
                </p>
                <p>
                  <strong>Fim:</strong>{" "}
                  {moment(eventSelected.end).format("DD/MM/YYYY HH:mm")}
                </p>
                <p>
                  <strong>Agenda:</strong> {agendas[agendaSelecionada].nome}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                  }}
                >
                  <button onClick={() => setEventSelected(null)}>Fechar</button>
                  <button
                    style={{ backgroundColor: "#d9534f", color: "white" }}
                    onClick={handleDeleteEvent}
                  >
                    Deletar
                  </button>
                </div>
              </div>
            </div>
          )}

          {novoEvento && (
            <div className="modal-overlay">
              <div className="modal">
                <h3>Novo Evento</h3>
                <p>
                  Início: {moment(novoEvento.start).format("DD/MM/YYYY HH:mm")}
                </p>

                <label>Duração:</label>
                <select
                  value={duracaoMinutos}
                  onChange={(e) => setDuracaoMinutos(Number(e.target.value))}
                >
                  <option value={15}>15 minutos</option>
                  <option value={30}>30 minutos</option>
                  <option value={45}>45 minutos</option>
                  <option value={60}>60 minutos</option>
                </select>

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