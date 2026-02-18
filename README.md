# API de Clima

API REST desenvolvida em **Node.js** que consome dados meteorológicos em tempo real a partir da API pública **OpenWeatherMap**.

## Como Executar o Projeto

### Pré-requisito

Ter o **Node.js** instalado na máquina.  
Download: https://nodejs.org/

---

### 1. Clonar o repositório

git clone https://github.com/joaopaulo-BDev/api-clima.git

### 2. Acessar a pasta do projeto:

        cd api-clima
   
É importante que o terminal seja aberto dentro da pasta ou esteja no endereço correto do projeto.

### 3. Instalar as dependências

Este comando instala todas as bibliotecas necessárias definidas no arquivo package.json.

        npm install

### 4. Criar o arquivo .env

Na raiz do projeto, crie um arquivo chamado .env e adicione sua chave da API:

        OPENWEATHER_API_KEY= ?

Você pode obter uma chave gratuita em: https://openweathermap.org/api

### 5. Iniciar o servidor

Execute o comando abaixo para iniciar a aplicação:

        npm start


A API estará disponível em:

        http://localhost:3000/clima

### 6. Exemplo de uso

Buscar clima padrão:

        http://localhost:3000/clima


Buscar clima de uma cidade específica:

        http://localhost:3000/clima?cidade=Rio de Janeiro

## Funcionalidades

- Consulta o clima atual de qualquer cidade.
- Retorna temperatura, sensação térmica, umidade e condições do tempo.
- Utiliza variáveis de ambiente para proteger a chave da API.
- Configurada para execução local e via **Docker**.
  
---

## Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript no servidor.  
- **Express.js** – Framework minimalista para criação de rotas e servidor HTTP.  
- **Axios** – Cliente HTTP usado para fazer requisições à API externa.  
- **dotenv** – Gerenciador de variáveis de ambiente (.env).  
- **Docker** – Containerização do projeto para garantir portabilidade e isolamento.

---

## Estrutura do Projeto

api-clima
┣ 📜 .env
┣ 📜 Dockerfile
┣ 📜 package.json
┣ 📜 index.js
┗ 📜 README.md

---
