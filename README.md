# Desafio Técnico — Coopersystem (Angular)

Este projeto é uma solução para o desafio técnico proposto pela **Coopersystem**, que simula um sistema de resgate personalizado de fundos de investimentos.

## ✅ Funcionalidades implementadas

- Listagem de investimentos com dados mockados via API (Mocky)
- Navegação entre listagem e tela de resgate
- Bloqueio de investimentos com carência (não clicáveis)
- Tela de resgate com:
  - Valor total atualizado dinamicamente
  - Validação por saldo acumulado da ação
  - Máscara de moeda (R$)
- Modal de **sucesso** e **erro** conforme regras de negócio
- Responsividade para mobile e desktop
- Testes unitários com **Karma + Jasmine**
- Armazenamento do resgate válido no `localStorage`

## 🔧 Tecnologias e bibliotecas

- Angular
- Angular Material
- Karma / Jasmine
- currencyMask
- Mocky API
- SCSS com media queries

## ▶️ Como rodar o projeto

```bash
git clone https://github.com/lucasroncolato/coopersystem-desafio-tecnico.git
cd coopersystem-desafio-tecnico
npm install
ng serve
```

Acesse `http://localhost:4200` no navegador.

## 🧪 Rodar os testes unitários

```bash
ng test
```

## 🌐 API de mock (Mocky.io)

O projeto consome os dados de investimento a partir de um endpoint Mocky:

```
https://run.mocky.io/v3/c2bece02-b490-4145-a06b-b4df12648306
```

## 📱 Responsividade

A aplicação está preparada para telas de:
- Celulares
- Tablets
- Desktops

## 📦 Build para produção

```bash
ng build
```

---

Desenvolvido como parte do desafio técnico da Coopersystem por [Lucas Roncolato](https://github.com/lucasroncolato).