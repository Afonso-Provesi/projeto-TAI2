# Simulando banco de dados com listas
db_pacientes = []
db_usuarios = []
db_compromissos = []

# Gera ID único incremental
def get_next_id():
    if db_pacientes:
        return max(p.id for p in db_pacientes) + 1
    else:
        return 1
    
def get_next_compromisso_id():
    if db_compromissos:
        return max(c.id for c in db_compromissos) + 1
    else:
        return 1

