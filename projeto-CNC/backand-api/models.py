from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class PacienteBase(BaseModel):
    nome: str
    telefone: str
    endereco: Optional[str] = ""
    profissional: str
    procedimento: str
    exames: Optional[str] = ""
    orcamento: Optional[float] = 0.0


class Paciente(PacienteBase):
    id: int
    status: str
    dataCadastro: str


class Usuario(BaseModel):
    empresa: str
    email: EmailStr
    senha: str


class UsuarioLogin(BaseModel):
    email: EmailStr
    senha: str

class CompromissoBase(BaseModel):
    title: str
    start: datetime
    end: datetime
    agenda: str

class Compromisso(CompromissoBase):
    id: int