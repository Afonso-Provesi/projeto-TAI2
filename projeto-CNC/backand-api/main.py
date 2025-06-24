from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes_pacientes import router as pacientes_router
from routes_usuarios import router as usuarios_router
from routes_compromissos import router as compromissos_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Em produção, restringir
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(pacientes_router, prefix="/pacientes")
app.include_router(usuarios_router, prefix="/usuarios")
app.include_router(compromissos_router, prefix="/compromissos")
