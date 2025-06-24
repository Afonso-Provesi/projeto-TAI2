from sqlalchemy import Column, Integer, String, Float, DateTime
from database import Base
from datetime import datetime

class PacienteModel(Base):
    __tablename__ = "pacientes"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String)
    telefone = Column(String)
    endereco = Column(String, nullable=True)
    profissional = Column(String)
    procedimento = Column(String)
    exames = Column(String, nullable=True)
    orcamento = Column(Float, default=0.0)
    status = Column(String, default="Ativo")
    dataCadastro = Column(DateTime, default=datetime.utcnow)


class UsuarioModel(Base):
    __tablename__ = "usuarios"

    id = Column(Integer, primary_key=True, index=True)
    empresa = Column(String)
    email = Column(String, unique=True)
    senha = Column(String)


class CompromissoModel(Base):
    __tablename__ = "compromissos"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    start = Column(DateTime)
    end = Column(DateTime)
