# 🦟 Game Mata Mosquito

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)

> Um jogo interativo e desafiador desenvolvido em JavaScript puro, onde o objetivo é eliminar os mosquitos que surgem na tela antes que eles desapareçam e você perca suas vidas.

---

## 📸 Demonstração

<div align="center">
  <img src="imagens/Captura de tela 2026-01-24 184413.png" width="700px" alt="Print do Jogo Mata Mosquito" />
  <img src="imagens/Captura de tela 2026-01-24 184440.png" width="700px" alt="Print do Jogo Mata Mosquito" />
</div>

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído para praticar manipulação do DOM e lógica de programação:

- **[HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML):** Estrutura das páginas (Início, Jogo, Vitória e Game Over).
- **[CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS):** Estilização customizada, incluindo cursor personalizado de mata-mosca.
- **[Bootstrap 5](https://getbootstrap.com/):** Utilizado para estilizar os botões e layouts das telas de menu e mensagens finais.
- **[JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript):**
  - Manipulação do DOM (criar e remover elementos HTML dinamicamente).
  - Controle de tempo (`setInterval`, `setTimeout`).
  - Lógica matemática (`Math.random`, `Math.floor`) para posição e tamanho aleatórios.
  - Gerenciamento de estado com `sessionStorage` (para persistir a dificuldade escolhida).

---

## ⚙️ Funcionalidades do Jogo

- **🦟 Geração Randômica:** Mosquitos aparecem em posições aleatórias na tela, com tamanhos variados (pequeno, médio, grande) e orientações diferentes (olhando para esquerda ou direita).
- **⏱️ Cronômetro:** O jogador deve sobreviver por **20 segundos** para vencer.
- **💔 Sistema de Vidas:** O jogador possui 3 vidas. Se o mosquito não for clicado a tempo, ele desaparece e uma vida é perdida.
- **🎮 Níveis de Dificuldade:**
  - **Fácil:** Mosquitos aparecem a cada 1.5 segundos.
  - **Normal:** Mosquitos aparecem a cada 1.2 segundos.
  - **Difícil:** Mosquitos aparecem a cada 0.85 segundos (ritmo frenético!).
- **📱 Responsividade:** O jogo detecta o tamanho da janela (`window.innerWidth/Height`) e ajusta a área de spawn dos mosquitos automaticamente, mesmo se a tela for redimensionada.

---

## 📂 Estrutura dos Arquivos

- `index.html`: Tela inicial para seleção de dificuldade.
- `app.html`: O palco do jogo onde a ação acontece.
- `vitoria.html`: Tela de parabenização ao vencer.
- `fim_de_jogo.html`: Tela de "Game Over".
- `imagens/`: Pasta contendo os assets (corações, mosca, fundos).

---

## 🕹️ Como jogar

1.**Clone este repositório:**

    git clone https://github.com/GuilhermeCalixto1/app-orcamento-pessoal.git

2.**Abra o jogo:**

    Navegue até a pasta do projeto.

    Abra o arquivo index.html no seu navegador favorito.

3.**Divirta-se:**

    Selecione o nível de dificuldade.

    Clique em "Iniciar Jogo".

    Tente clicar em todos os mosquitos antes que o tempo acabe!

``

## 👨‍💻 Autor

<div align="center">

<img style="border-radius: 50%;" src="https://wsrv.nl/?url=github.com/GuilhermeCalixto1.png&w=400&h=400&mask=circle" width="200em" alt="Foto de Perfil"/>

<br>

<h3>Guilherme Calixto</h3> <p>Estudante de Engenharia de Software</p>

<a href="https://www.linkedin.com/in/guilhermecalixto1" target="_blank">
<img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/xbu/linkedin-revised-brand-guidelines/linkedin-logo/fg/brandg-linkedinlogo-hero-logo-dsk-v01.png/jcr:content/renditions/brandg-linkedinlogo-hero-logo-dsk-v01-2x.png" width="100em" />
</a>

</div>
