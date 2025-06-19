from fastapi import APIRouter, HTTPException
from models import Usuario, UsuarioLogin
from database_fake import db_usuarios

router = APIRouter()

@router.post("/cadastrar")
def cadastrar_usuario(usuario: Usuario):
    if any(u.email == usuario.email for u in db_usuarios):
        raise HTTPException(status_code=400, detail="Email já cadastrado")
    db_usuarios.append(usuario)
    return {"msg": "Usuário cadastrado com sucesso"}

@router.post("/login")
def login_usuario(login: UsuarioLogin):
    user = next((u for u in db_usuarios if u.email == login.email and u.senha == login.senha), None)
    if not user:
        raise HTTPException(status_code=401, detail="Credenciais inválidas")
    return {"msg": "Login realizado com sucesso"}
