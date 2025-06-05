# Modelo conceitual - Sistema medAgenda

## Contextualização
Clínicas de pequeno e médio porte, como a Clínica Zucato, representam uma parcela significativa dos serviços odontológicos oferecidos no Brasil. Apesar da crescente digitalização na área da saúde, muitos desses estabelecimentos ainda enfrentam dificuldades com a organização de agendas, o armazenamento de dados dos pacientes e a sistematização do atendimento clínico. Grande parte das soluções disponíveis no mercado, como o Clinicorp, são genéricas, caras ou pouco flexíveis às necessidades específicas de cada clínica.

Diante disso, surge a necessidade de um sistema de gestão simples, acessível e personalizado, capaz de atender às demandas específicas dessas clínicas, sem adicionar complexidade desnecessária. O sistema medAgenda está sendo desenvolvido com esse propósito: oferecer uma ferramenta sob medida para gerenciar agendamentos e dados clínicos de pacientes, inicialmente voltada exclusivamente para a Clínica Zucato, com a possibilidade de adaptação a outras instituições no futuro.

## Problema principal
A maioria das soluções de software para clínicas é voltada para estabelecimentos de grande porte, com múltiplos profissionais, alta rotatividade de pacientes e estrutura organizacional complexa. Esses sistemas geralmente oferecem uma ampla gama de funcionalidades – como controle financeiro detalhado, integração com laboratórios, gestão de estoque e marketing – que acabam encarecendo o produto e tornando-o desnecessariamente complexo para clínicas menores.

Já as clínicas de pequeno e médio porte, operam com equipes enxutas, orçamentos limitados e necessidades específicas de organização, principalmente no agendamento de consultas e no registro de dados clínicos dos pacientes. Essas clínicas enfrentam dificuldades para encontrar soluções acessíveis, personalizáveis e de fácil uso, o que acaba levando muitas a manterem seus registros de forma manual ou em planilhas improvisadas. Isso compromete a eficiência, a padronização do atendimento e a segurança das informações. 

É importante constatar que não é obrigatório que o upgrade para um sistema digital seja perfeito desde o início. Pequenas melhorias e implementações progressivas devem ser priorizadas, de forma que a transição ocorra de maneira suave e demonstre, com clareza, os reais benefícios da digitalização no dia a dia da clínica.

## Impacto
A ausência de uma solução digital adequada gera diversos desafios no cotidiano de clínicas de pequeno e médio porte, como a Clínica Zucato. Entre os principais impactos, destacam-se:

* Desorganização de agendas: com agendamentos manuais ou descentralizados, é comum o esquecimento de horários, duplicidade de consultas e conflitos de agenda;

* Risco de perda de informações importantes: dados clínicos mantidos em papéis ou planilhas estão mais sujeitos a extravios, inconsistências e dificuldade de acesso rápido;

* Baixa eficiência operacional: o tempo gasto em tarefas administrativas simples, como buscar o histórico de um paciente, compromete o foco no atendimento e na experiência do paciente;

* Dificuldade de padronização nos processos: sem um sistema único, cada profissional ou funcionário pode adotar um método diferente de registro, dificultando a continuidade do atendimento e o controle interno;

* Resistência à digitalização: a complexidade dos sistemas existentes e a falta de soluções acessíveis contribuem para a manutenção de métodos ultrapassados e ineficazes.

Esses fatores impactam diretamente a qualidade do atendimento, a confiança do paciente e a sustentabilidade da operação clínica, tornando evidente a necessidade de uma solução tecnológica sob medida, acessível e funcional.

## Solução proposta
A solução proposta é o desenvolvimento do medAgenda, um sistema web de gestão clínica desenvolvido inicialmente sob medida para a Clínica Zucato. O sistema tem como foco centralizar e simplificar os processos administrativos essenciais de clínicas de pequeno e médio porte, oferecendo uma alternativa digital acessível, personalizável sob demanda e fácil de usar.

Entre suas funcionalidades principais, destacam-se:

* Agendamento de consultas, com visualização clara da agenda e organização prática por datas e profissionais;

* Gestão de pacientes, com cadastro completo, histórico clínico básico e registro de atendimentos anteriores;

* Consulta ao histórico de procedimentos, permitindo rápida recuperação de informações essenciais durante o atendimento.

Também não será desenvolvido um sistema próprio de backup, sendo essa uma funcionalidade opcional a ser viabilizada por serviços de hospedagem confiáveis do mercado.

## Beneficios esperados
Com a implantação do medAgenda, espera-se que a clínica tenha ganhos significativos em organização, produtividade e confiabilidade das informações, especialmente por se tratar de uma solução personalizada e focada nas reais necessidades do ambiente clínico. Entre os principais benefícios previstos, destacam-se:

* Melhoria na organização de agendamentos, reduzindo falhas manuais e conflitos de horários;

* Centralização das informações dos pacientes, facilitando o acesso rápido e seguro ao histórico clínico;

* Facilidade de uso, com uma interface simples, acessível via navegador, sem necessidade de instalações complexas;

* Redução da dependência de processos manuais, minimizando o risco de perda de dados e retrabalho;

* Possibilidade de evoluções sob demanda, adaptando o sistema às necessidades futuras da clínica sem depender de soluções genéricas do mercado;

* Incentivo à formação acadêmica, ao permitir que estudantes participem do desenvolvimento como parte de sua formação, gerando impacto positivo na educação técnica local.

## Funções do sistema
| N | Função | Tipo |
| -------- | ----- | ----------- |
| 1        |Cadastro de pacientes, com dados pessoais e clínicos básicos|Entrada|
| 2        |Atualização de informações do paciente (contato, histórico)|Entrada|
| 3        |Registro de agendamento de consultas (data, horário, profissional)|Entrada|
| 4        |Alteração e cancelamento de consultas previamente agendadas|Entrada|
| 5        |Upload de arquivos (ex: exames, prescrições, documentos complementares)|Entrada|
| 6        |Validação de horários disponíveis para evitar conflitos na agenda|Processamento|
| 7        |Armazenamento dos dados cadastrais e históricos|Processamento|
| 8        |Consulta rápida do histórico de atendimentos de cada paciente|Processamento|
| 9        |Exibição da agenda diária, semanal e mensal para cada profissional|Saída|

## Regras de negócio
| Função | Regra de Negócio |
| --- | ---- |  
| Cadastro de pacientes	| Cada paciente deve possuir um CPF único e obrigatório no sistema. |
| Agendamento de consultas	 | Não é permitido agendar dois atendimentos no mesmo horário para o mesmo profissional. |
| Alteração de agendamento	| Consultas só podem ser alteradas com um profissional. |
| Upload de arquivos	| Os arquivos anexados devem ter no máximo 10MB e estar nos formatos PDF, JPG ou PNG. |
| Acesso ao sistema	| Apenas usuários com login e senha cadastrados previamente podem acessar o sistema. |

## Nome entidade e atributos
### 1. Paciente
* cpf_paciente (PK)
* nome_paciente
* data_nascimento_paciente
* telefone_paciente
* email_paciente
* endereco_paciente

### 2. Prontuário
* id_prontuario (PK)
* cpf_paciente_fk (FK para Paciente)
* data_abertura_prontuario
* observacoes_prontuario
* documentos_gerais (multivalorado - arquivos, imagens, etc)

### 3. Consulta
* id_consulta (PK)
* dataConsulta
* horaConsulta
* cpfPaciente (FK)
* cpfFuncionario (FK)
* idProntuario (FK)
* tipoConsulta
* observacoesConsulta
* documentosConsulta (lista de arquivos)

### 4. Funcionário
* cpf_funcionario (PK)
* nome_funcionario
* telefone_funcionario
* email_funcionario

## Relacionamentos 
|Entidades envolvidas|Nome do Relacionamento|Cardinalidade|
|-------------------|---------------------|-------------|
|Paciente — Consulta|Paciente marca Consulta|Paciente (1,1)—(0,N) Consulta|
|Funcionário — Consulta|Funcionário atende Consulta|Funcionário (1,1)—(0,N) Consulta|
|Paciente — Prontuário|Paciente possui Prontuário|Paciente (1,1)—(1,1) Prontuário|
|Prontuário — Consulta|Prontuário compõe Consulta|Prontuário (1,1)—(0,N) Consulta|

##  Diagrama entidade-relacionamento sem atributos
![Alt text][def]

[def]: MODELO.png