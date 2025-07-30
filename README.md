🚀 Desafio Técnico – RD Station

## 🧠 Sobre o desafio

Este projeto consiste na implementação de uma funcionalidade de **recomendação de produtos** dentro de uma aplicação React já iniciada. Os dados são consumidos de uma API fake via `json-server`, e as preferências são coletadas por um formulário com duas opções de recomendação:

- `SingleProduct` → retorna **um único produto** mais aderente
- `MultipleProducts` → retorna **vários produtos** aderentes às preferências

A aplicação foi construída com foco em:
- Clareza e legibilidade de código (Clean Code)
- Separação de responsabilidades entre componentes
- Lógica extensível e testável

---

## ⚙️ Tecnologias Utilizadas

- React.js (Vite)
- Tailwind CSS
- JSON Server
- Node.js v18.18.0
- npm (ou yarn)

## 🧪 Requisitos Implementados

- [x] Receber preferências via formulário
- [x] Exibir recomendações com base nas preferências
- [x] Implementação dos modos `SingleProduct` e `MultipleProducts`
- [x] Em caso de empate, retorna o último produto
- [x] Lógica modular e extensível
- [x] Validação para evitar falhas na escolha de preferências
- [x] Estilização com Tailwind CSS
- [x] README completo com instruções

---
## ✨ Melhorias futuras

- Testes automatizados
- Feedback visual e UX melhorada
- Cards com mais detalhes dos produtos

---

## ▶️ Como rodar o projeto localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/BarbaraDodsDev/desafio-rd-frontend.git
cd desafio-rd-frontend
