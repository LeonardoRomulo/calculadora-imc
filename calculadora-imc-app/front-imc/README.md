# Calculadora de IMC 📊

Uma aplicação web simples e moderna para calcular o Índice de Massa Corporal (IMC). O usuário insere sua altura e peso, e a aplicação retorna o valor do IMC juntamente com uma classificação do status (por exemplo, Abaixo do peso, Peso normal, Sobrepeso, etc.).

## ✨ Funcionalidades

*   Entrada de altura (em metros, ex: 1.75) e peso (em kg, ex: 68.5).
*   Cálculo do IMC em tempo real.
*   Exibição clara do resultado do IMC e do status correspondente.
*   Interface de usuário limpa, responsiva e com design moderno.
*   Validação de entrada para garantir que os valores sejam numéricos e dentro de um intervalo razoável (simulado na lógica de "serviço").
*   Mensagens de erro amigáveis caso a entrada seja inválida.

## 🚀 Tecnologias Utilizadas

*   **Frontend:**
    *   [React](https://reactjs.org/) (utilizando [Next.js](https://nextjs.org/) como framework)
    *   JavaScript (ES6+)
    *   CSS Modules para estilização escopada por componente.
    *   HTML5

## 📂 Estrutura do Projeto (Frontend)

A parte do frontend da aplicação está localizada na pasta `front-imc` e segue uma estrutura típica de projetos Next.js:

```
calculadora-imc-app/
└── front-imc/
    ├── componentes/
    │   └── Card/
    │       ├── index.jsx           # Componente React do Card da calculadora
    │       └── Card.module.css     # Estilos CSS para o Card
    ├── public/                     # Arquivos estáticos
    ├── src/
    │   ├── app/
    │   │   ├── globals.css         # Estilos globais da aplicação
    │   │   ├── layout.js           # Layout principal da aplicação Next.js
    │   │   ├── page.js             # Componente da página principal (Home)
    │   │   ├── page.module.css     # Estilos CSS para a página principal
    │   │   └── servicos/
    │   │       └── app.js          # Lógica de negócio para o cálculo do IMC
    ├── .eslintrc.json
    ├── .gitignore
    ├── jsconfig.json
    ├── next.config.mjs
    ├── package-lock.json
    └── package.json
```

## 🛠️ Como Rodar o Projeto Localmente

Siga os passos abaixo para executar a aplicação em seu ambiente de desenvolvimento:

1.  **Pré-requisitos:**
    *   Node.js (versão 18.x ou superior recomendada)
    *   npm (geralmente vem com o Node.js) ou yarn

2.  **Clone o repositório:**
    ```bash
    git clone https://github.com/LeonardoRomulo
    cd calculadora-imc-app
    ```

3.  **Navegue até a pasta do frontend:**
    ```bash
    cd front-imc
    ```

4.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    # yarn install
    ```

5.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    # yarn dev
    ```

6.  Abra seu navegador e acesse: `http://localhost:3000`

## 🖼️ Capturas de Tela (Opcional)

*(Você pode adicionar aqui algumas imagens da sua aplicação em funcionamento)*

## 👤 Autor

*   **Leonardo** - https://github.com/LeonardoRomulo

---

Feito com muito café e código!