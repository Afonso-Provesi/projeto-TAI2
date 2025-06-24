from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from models import CompromissoModel
from schemas import Compromisso, CompromissoBase
from database import SessionLocal

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=Compromisso)
def criar_compromisso(compromisso: CompromissoBase, db: Session = Depends(get_db)):
    novo = CompromissoModel(**compromisso.dict())
    db.add(novo)
    db.commit()
    db.refresh(novo)
    return novo

@router.get("/", response_model=list[Compromisso])
def listar_compromissos(db: Session = Depends(get_db)):
    return db.query(CompromissoModel).all()

@router.delete("/{compromisso_id}", response_model=Compromisso)
def excluir_compromisso(compromisso_id: int, db: Session = Depends(get_db)):
    compromisso = db.query(CompromissoModel).get(compromisso_id)
    if not compromisso:
        raise HTTPException(status_code=404, detail="Compromisso não encontrado")
    db.delete(compromisso)
    db.commit()
    return compromisso
