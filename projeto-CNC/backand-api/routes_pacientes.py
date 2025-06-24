from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from models import PacienteModel
from schemas import Paciente, PacienteBase
from database import SessionLocal

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=Paciente)
def criar_paciente(paciente: PacienteBase, db: Session = Depends(get_db)):
    novo_paciente = PacienteModel(**paciente.dict())
    db.add(novo_paciente)
    db.commit()
    db.refresh(novo_paciente)
    return novo_paciente

@router.get("/", response_model=list[Paciente])
def listar_pacientes(db: Session = Depends(get_db)):
    return db.query(PacienteModel).all()

@router.get("/{paciente_id}", response_model=Paciente)
def obter_paciente(paciente_id: int, db: Session = Depends(get_db)):
    paciente = db.query(PacienteModel).get(paciente_id)
    if not paciente:
        raise HTTPException(status_code=404, detail="Paciente não encontrado")
    return paciente

@router.patch("/{paciente_id}/status", response_model=Paciente)
def atualizar_status_paciente(paciente_id: int, status: str, db: Session = Depends(get_db)):
    paciente = db.query(PacienteModel).get(paciente_id)
    if not paciente:
        raise HTTPException(status_code=404, detail="Paciente não encontrado")
    if status not in ["Ativo", "Inativo"]:
        raise HTTPException(status_code=400, detail="Status inválido")
    paciente.status = status
    db.commit()
    db.refresh(paciente)
    return paciente
