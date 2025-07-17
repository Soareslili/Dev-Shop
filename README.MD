# Projeto Produtos Fullstack (Node.js + React + MongoDB)

## Descrição

Este é um projeto fullstack para gerenciar produtos, com backend em Node.js + Express conectado ao MongoDB Atlas, e frontend em React estilizado com Tailwind CSS.

Permite criar, listar, editar e excluir produtos via API REST e interface web.

---

## Tecnologias

- Node.js  
- Express  
- MongoDB Atlas  
- React  
- Tailwind CSS  
- React Router DOM  

---

## Estrutura do projeto

\```
/backend         # Código do backend (API REST)
/frontend        # Código do frontend React
.gitignore       # Arquivos ignorados pelo Git
.env.example     # Exemplo das variáveis de ambiente necessárias
README.md        # Documentação do projeto
\```

---

## Configuração e execução

### 1. Clonar o repositório

\```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
\```

### 2. Configurar Backend

\```bash
cd backend
npm install
\```

Copie o arquivo `.env.example` para `.env`:

\```bash
cp .env.example .env
\```

Preencha seu arquivo `.env` com os dados reais:

\```
MONGO_URI=your_mongodb_connection_string_here
PORT=3001
\```

Rode o servidor:

\```bash
npm run dev
\```

### 3. Configurar Frontend

\```bash
cd ../frontend
npm install
npm start
\```

---

## Funcionalidades

- Listar todos os produtos  
- Cadastrar novo produto  
- Editar produto existente  
- Excluir produto  
- Integração entre front-end e back-end  
- Visual responsivo e moderno com Tailwind CSS  
- Navegação entre páginas com React Router  

---

## Variáveis de ambiente

Nunca compartilhe seu arquivo `.env` com informações sensíveis publicamente.

Use o arquivo `.env.example` como modelo para configurar suas variáveis.

---

## Como usar

- Acesse `http://localhost:3000` (ou a porta que o React rodar) para ver o frontend.  
- Use a navegação para cadastrar, editar ou excluir produtos.  
- O backend fica rodando na porta configurada (ex: 3001).  

---
