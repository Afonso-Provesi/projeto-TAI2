from fastapi import APIRouter, HTTPException
from datetime import datetime
from typing import List

from models import Paciente, PacienteBase
from database_fake import db_pacientes, get_next_id

router = APIRouter()

@router.post("/", response_model=Paciente)
def criar_paciente(paciente: PacienteBase):
    novo_paciente = Paciente(
        id=get_next_id(),
        dataCadastro=datetime.utcnow().isoformat(),
        status="Ativo",
        **paciente.dict()
    )
    db_pacientes.append(novo_paciente)
    return novo_paciente

@router.get("/", response_model=List[Paciente])
def listar_pacientes():
    return db_pacientes

@router.get("/{paciente_id}", response_model=Paciente)
def obter_paciente(paciente_id: int):
    paciente = next((p for p in db_pacientes if p.id == paciente_id), None)
    if paciente is None:
        raise HTTPException(status_code=404, detail="Paciente não encontrado")
    return paciente

@router.patch("/{paciente_id}/status", response_model=Paciente)
def atualizar_status_paciente(paciente_id: int, status: str):
    paciente = next((p for p in db_pacientes if p.id == paciente_id), None)
    if not paciente:
        raise HTTPException(status_code=404, detail="Paciente não encontrado")
    if status not in ["Ativo", "Inativo"]:
        raise HTTPException(status_code=400, detail="Status inválido")
    paciente.status = status
    return paciente
