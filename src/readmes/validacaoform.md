<h1 align="center">
  📝 Validador de Formulário com Regex
</h1>

<div align="center">

[![Status](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge&logo=checkbox)](https://github.com/GuilhermeCalixto1)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge&logo=github)](https://github.com/GuilhermeCalixto1)

</div>

<p align="center">
  <b>Um formulário de cadastro com validação de dados em tempo real utilizando JavaScript e Expressões Regulares (Regex).</b>
</p>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#funcionalidades">Regras de Validação</a> •
  <a href="#autor">Autor</a>
</p>

<br>

## 📸 Preview do Projeto

<div align="center">
  <img src="./img/Captura de tela 2026-01-24 205057.png" alt="Demonstração do Formulário" width="100%" style="border-radius: 10px; box-shadow: 0px 4px 10px rgba(0,0,0,0.4);">
</div>

<br>

<div id="sobre"></div>

## 🔖 Sobre

Este projeto foi desenvolvido para praticar a manipulação do **DOM** e, principalmente, o uso de **Expressões Regulares (Regex)** para garantir a integridade dos dados inseridos pelo usuário.

Além da lógica de validação, o projeto conta com uma interface moderna em **Dark Mode**, focada na experiência do usuário (UX), com feedbacks visuais e placeholders explicativos.

---

<div id="tecnologias"></div>

## 🚀 Tecnologias

<div align="center">
   
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

<div id="funcionalidades"></div>

## ⚙️ Regras de Validação (Regex)

O script verifica os campos baseados nos seguintes padrões:

| Campo        | Regra                                                | Regex Utilizado                            |
| :----------- | :--------------------------------------------------- | :----------------------------------------- |
| **👤 Nome**  | Apenas letras e espaços (mínimo 2 caracteres).       | `/^[a-zA-Z\u00C0-\u00FF ]{2,}$/`           |
| **🔒 Senha** | Mínimo 6 caracteres, contendo letras e números.      | `/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/` |
| **📄 CPF**   | Formato obrigatório com pontuação: `XXX.XXX.XXX-XX`. | `/^\d{3}\.\d{3}\.\d{3}-\d{2}$/`            |
| **📅 Data**  | Formato brasileiro: `DD/MM/AAAA`.                    | `/^\d{2}\/\d{2}\/\d{4}$/`                  |

### ✨ Funcionalidades Extras

- **Dark Mode:** Design elegante com cores escuras e detalhes em roxo (`#6200ea`).
- **Prevenção de Envio:** O formulário não é enviado (`event.preventDefault`) se houver erros.
- **Auto Focus:** O cursor foca automaticamente no campo que contém erro.

---

<div id="execucao"></div>

## 💻 Como rodar o projeto

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/GuilhermeCalixto1/ValidacaoDeFormulario.git
   ```

<div id="autor"></div>
## 👨‍💻 Autor
<div align="center">

<img style="border-radius: 50%;" src="https://wsrv.nl/?url=github.com/GuilhermeCalixto1.png&w=400&h=400&mask=circle" width="200em" alt="Foto de Perfil"/>

<br>

<h3>Guilherme Calixto</h3> <p>Estudante de Engenharia de Software</p>

<a href="https://www.linkedin.com/in/guilhermecalixto1" target="_blank">
<img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/xbu/linkedin-revised-brand-guidelines/linkedin-logo/fg/brandg-linkedinlogo-hero-logo-dsk-v01.png/jcr:content/renditions/brandg-linkedinlogo-hero-logo-dsk-v01-2x.png" width="100em" />
</a>

</div>
