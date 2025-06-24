from fastapi import APIRouter, HTTPException
from database_fake import db_agendas, db_compromissos

router = APIRouter()

@router.get("/")
def listar_agendas():
    return db_agendas

@router.post("/")
def criar_agenda(nome: str):
    if nome in db_agendas:
        raise HTTPException(status_code=400, detail="Agenda já existe")
    db_agendas.append(nome)
    return {"msg": f"Agenda '{nome}' criada com sucesso"}

@router.delete("/{nome}")
def excluir_agenda(nome: str):
    if nome not in db_agendas:
        raise HTTPException(status_code=404, detail="Agenda não encontrada")
    
    db_compromissos[:] = [c for c in db_compromissos if c.agenda != nome]

    db_agendas.remove(nome)
    return {"msg": f"Agenda '{nome}' e seus compromissos foram excluídos com sucesso"}