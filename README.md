# chatbot-gemini-BackEnd

**Projeto BackEnd** de um chatbot consumindo a API do Gemini e acessando por meio do projeto [chatbot-gemini-frontend](https://github.com/EmanuelBitenc/chatbot-gemini-frontend).

Este projeto permite a interação com um chatbot que utiliza o modelo Gemini, proporcionando uma interface de chat simples e eficiente.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criar o servidor.
- **Axios**: Cliente HTTP para fazer requisições à API do Gemini.
- **dotenv**: Para carregar variáveis de ambiente de um arquivo `.env`.

## Como Rodar

Para rodar este projeto em sua máquina local, siga os passos abaixo:

### 1. Obtenha uma chave API do Gemini

- Primeiramente, você precisará de uma chave de API para interagir com o serviço Gemini. Acesse a [documentação oficial do Gemini API](https://ai.google.dev/gemini-api/docs?hl=pt-br#node.js) para obter sua chave.
- Crie um arquivo `.env` na raiz do projeto e adicione a sua chave API da seguinte forma:

```env
API_KEY="SuaChaveAqui"
```

### 2. Rode o backend

Este projeto backend é responsável por interagir com a API do Gemini. Ele será consumido pelo chatbot-gemini-frontend, então, antes de rodar o frontend, execute o backend.

Clone este repositório para sua máquina local:

```bash
git clone https://github.com/EmanuelBitenc/chatbot-gemini-backend.git
```

Instale as dependências do backend:

```bash
npm install
```

Rode o projeto backend:

```bash
node server.ts
```

O backend estará rodando localmente na porta 5000 e aguardando requisições.

### 3. Clone o repositório frontend

Para rodar a interface de chat do frontend, clone o repositório para sua máquina local [chatbot-gemini-frontend](https://github.com/EmanuelBitenc/chatbot-gemini-frontend):

### 4. Interaja com o Chatbot

Agora, com o backend rodando e o frontend aberto no navegador, você pode interagir com o chatbot utilizando a interface de chat. O backend fará as requisições à API do Gemini e retornará as respostas para o frontend.

### Estrutura do Projeto Backend

- server.ts: Arquivo principal do servidor. Gerencia as rotas e a comunicação com a API do Gemini.
- .env: Arquivo para armazenar variáveis de ambiente, como a chave API do Gemini.
