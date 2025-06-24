from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes_pacientes import router as pacientes_router
from routes_usuarios import router as usuarios_router
from routes_compromissos import router as compromissos_router
from routes_agendas import router as agendas_router

app = FastAPI()

# CORS para permitir acesso do frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Em produção, use ['http://localhost:3000']
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inclui as rotas organizadas
app.include_router(pacientes_router, prefix="/pacientes")
app.include_router(usuarios_router, prefix="/usuarios")
app.include_router(compromissos_router, prefix="/compromissos")
app.include_router(agendas_router, prefix="/agendas")

