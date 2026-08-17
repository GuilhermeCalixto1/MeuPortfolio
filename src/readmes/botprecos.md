# 🤖 Bot Comparador de Preços (Telegram + Playwright)

Um bot assíncrono para o Telegram que realiza Web Scraping simultâneo em grandes e-commerces (Amazon, Mercado Livre e Americanas) para encontrar e comparar preços de produtos.

## 🚀 Tecnologias Utilizadas
* Python (asyncio)
* Playwright (Automação de Navegador)
* python-telegram-bot (Interface)

## 🧠 Soluções Técnicas (Highlights)
* **Bypass de WAF e Anti-Bots:** Injeção de scripts (Stealth) e uso de contextos persistentes para evitar bloqueios por TLS Fingerprinting.
* **Resiliência a Layouts A/B:** Uso de seletores CSS hierárquicos e fallbacks para extração de dados mesmo quando a estrutura do DOM (como no Mercado Livre) sofre alterações dinâmicas.
* **Filtros Orgânicos:** Algoritmo que ignora anúncios patrocinados (Sponsored Ads) na Amazon, garantindo fidelidade na busca do usuário.

## 🛠️ Como rodar localmente

1. Clone o repositório: `git clone https://github.com/seu-usuario/seu-repositorio.git`
2. Instale as dependências: `pip install -r requirements.txt`
3. Instale os navegadores do Playwright: `playwright install`
4. Renomeie o arquivo `.env.example` para `.env` e adicione o seu Token do Telegram.
5. Execute o bot: `python bot.py`