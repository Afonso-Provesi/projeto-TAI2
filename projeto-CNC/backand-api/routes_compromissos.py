from fastapi import APIRouter, HTTPException
from typing import List

from models import Compromisso, CompromissoBase
from database_fake import db_compromissos, get_next_compromisso_id

router = APIRouter()

@router.post("/", response_model=Compromisso)
def criar_compromisso(compromisso: CompromissoBase):
    novo = Compromisso(id=get_next_compromisso_id(), **compromisso.dict())
    db_compromissos.append(novo)
    return novo

@router.get("/", response_model=List[Compromisso])
def listar_compromissos():
    return db_compromissos

@router.delete("/{compromisso_id}", response_model=Compromisso)
def excluir_compromisso(compromisso_id: int):
    compromisso = next((c for c in db_compromissos if c.id == compromisso_id), None)
    if not compromisso:
        raise HTTPException(status_code=404, detail="Compromisso não encontrado")
    db_compromissos.remove(compromisso)
    return compromisso
