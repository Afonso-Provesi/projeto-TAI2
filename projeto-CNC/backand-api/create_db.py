from database import Base, engine
from models import PacienteModel, UsuarioModel, CompromissoModel

print("Criando tabelas...")
Base.metadata.create_all(bind=engine)
print("Tabelas criadas com sucesso.")
