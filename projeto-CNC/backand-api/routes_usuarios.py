from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from models import UsuarioModel
from schemas import Usuario, UsuarioLogin
from database import SessionLocal

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/cadastrar")
def cadastrar_usuario(usuario: Usuario, db: Session = Depends(get_db)):
    if db.query(UsuarioModel).filter(UsuarioModel.email == usuario.email).first():
        raise HTTPException(status_code=400, detail="Email já cadastrado")
    novo = UsuarioModel(**usuario.dict())
    db.add(novo)
    db.commit()
    return {"msg": "Usuário cadastrado com sucesso"}

@router.post("/login")
def login_usuario(login: UsuarioLogin, db: Session = Depends(get_db)):
    user = db.query(UsuarioModel).filter(
        UsuarioModel.email == login.email,
        UsuarioModel.senha == login.senha
    ).first()
    if not user:
        raise HTTPException(status_code=401, detail="Credenciais inválidas")
    return {"msg": "Login realizado com sucesso"}
