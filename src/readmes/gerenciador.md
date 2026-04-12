# 📋 Gerenciador de Tarefas (Task Manager)

Um aplicativo simples e intuitivo para gerenciamento de tarefas diárias, desenvolvido para praticar conceitos fundamentais do React.

🔗 **Deploy:** [Acesse o projeto online aqui](https://gerenciador-de-tarefas-react-dusds8k6w.vercel.app)

<img width="700" height="615" alt="screenshot" src="https://github.com/user-attachments/assets/ea503bfe-b302-4d1a-a907-d7c3657b8784" />

## 🚀 Funcionalidades

- **Adicionar Tarefas:** Crie novas tarefas com título e descrição detalhada.
- **Listagem Dinâmica:** Visualize todas as suas tarefas em tempo real.
- **Marcar como Concluída:** Clique na tarefa para riscar/desmarcar (toggle state).
- **Detalhes da Tarefa:** Navegação para uma página exclusiva com os detalhes da tarefa (usando React Router).
- **Excluir Tarefas:** Remova itens da lista facilmente.
- **Persistência de Dados:** As tarefas são salvas no **LocalStorage** do navegador, garantindo que você não perca seus dados ao atualizar a página.

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **[React](https://react.dev/)** (Vite) - Biblioteca principal para construção da interface.
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de estilização utilitário.
- **[React Router DOM](https://reactrouter.com/)** - Gerenciamento de rotas e navegação (`useNavigate`, `useLocation`).
- **[Lucide React](https://lucide.dev/)** - Ícones modernos e leves.
- **[UUID](https://github.com/uuidjs/uuid)** - Geração de IDs únicos para as tarefas.
- **Vercel** - Plataforma utilizada para o deploy da aplicação.

## 🧠 Conceitos Praticados

Durante o desenvolvimento deste projeto, foram aplicados os seguintes conceitos:

- **Hooks do React:** `useState` (gerenciamento de estado) e `useEffect` (efeitos colaterais e persistência).
- **Manipulação de Arrays:** Uso de `map`, `filter` e spread operator (`...`) para gerenciar a lista de tarefas.
- **Props e Componentização:** Passagem de dados e funções entre componentes pai e filho.
- **Roteamento:** Navegação entre páginas passando dados via `state` (sem expor na URL).
- **LocalStorage:** Leitura e gravação de dados JSON no navegador.

## 📦 Como rodar o projeto localmente

Siga os passos abaixo para rodar o projeto na sua máquina:

1. **Clone o repositório:**

   git clone [https://github.com/GuilhermeCalixto1/GerenciadorDeTarefasReact.git](https://github.com/GuilhermeCalixto1/GerenciadorDeTarefasReact.git)

2. **Entre na pasta do projeto:**

cd GerenciadorDeTarefasReact

3. **Instale as dependências:**

npm install

4. **Rode o servidor de desenvolvimento:**

npm run dev 5. **Acesse no navegador:**
O terminal mostrará um link (geralmente http://localhost:5173).

Feito com 💜 por Guilherme Calixto

Referências: Curso React Felipe Rocha https://www.youtube.com/watch?v=2RWsLmu8yVc&t=4492s
