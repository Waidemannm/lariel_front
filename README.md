# 💙 Lariel — Casamento de Larissa & Samuel

Plataforma digital desenvolvida para centralizar todas as informações do casamento de Larissa e Samuel em um ambiente moderno, organizado e interativo.

O projeto foi concebido com foco em experiência do usuário, organização de dados e integração entre frontend e backend, oferecendo uma solução completa que funciona como:

- Convite digital  
- Guia oficial do evento  
- Sistema de confirmação de presença (RSVP)  
- Mural interativo de mensagens  

Tudo desenvolvido com programação própria e arquitetura personalizada.

---

## 📌 Status do Projeto

🚧 Em desenvolvimento contínuo  
✔ Funcionalidades principais implementadas  
🔄 Melhorias visuais e otimizações em andamento  

---

## 🎯 Objetivo

Criar uma experiência digital elegante e funcional que facilite a organização do evento e proporcione uma interação significativa entre os noivos e seus convidados.

O sistema foi projetado para ser:

- Intuitivo  
- Responsivo  
- Visualmente harmonioso  
- Integrado a uma API robusta  

---

## 🚀 Estrutura
    src/
    ├── components/
    ├── pages/
    ├── hooks/
    ├── services/
    ├── types/
    └── assets/

## 🚀 Funcionalidades

### 🏠 Página Inicial

Primeiro contato com o evento. Inclui:

- Foto do casal  
- Mensagem de boas-vindas  
- Contagem regressiva  
- Data e local do casamento  

---

### 📖 História do Casal

Seção dedicada à trajetória de Larissa e Samuel, apresentando:

- Como se conheceram  
- Momentos marcantes  
- Linha do tempo do relacionamento  

---

### 💍 Informações do Evento

Área com dados essenciais para os convidados:

- Data e horário  
- Endereço  
- Localização  
- Instruções importantes  

---

### ✅ Confirmação de Presença (RSVP)

Sistema digital de confirmação que permite:

- Identificação por convite  
- Visualização de convidados vinculados  
- Confirmação ou ausência individual  
- Atualização automática no banco de dados  

---

### 📝 Mural de Recados

Espaço interativo onde convidados podem:

- Enviar mensagens  
- Adicionar imagem opcional  
- Ter seus recados moderados antes da publicação  

**Fluxo:**

1. Recado enviado  
2. Salvo como pendente  
3. Após aprovação, publicado no mural público  

---

### 📸 Momentos

Galeria visual com:

- Fotos do casal  
- Registros especiais  
- Imagens do evento (após realização)  

---

## 🛠 Tecnologias Utilizadas

### Frontend
- React  
- Vite  
- TypeScript  
- Tailwind CSS  

### Backend
- Java  
- Quarkus  
- Deploy via Render  

### Banco de Dados
- Oracle SQL  
- Oracle SQL Developer  
- Oracle Data Modeler  

### Versionamento
- Git  
- GitHub  

---

## 🏗 Arquitetura

O sistema é dividido em:

- **Frontend Público** — interface para convidados  
- **Painel Administrativo** — gerenciamento de convites e recados  
- **API REST** — responsável pela lógica e integração com banco  
- **Banco Oracle** — armazenamento estruturado dos dados  

---

### 👨‍💻 Autor

Moisés Waidemann Molinillo Júnior

Desenvolvedor responsável por toda a arquitetura, implementação e integração do sistema.

⸻

📞 Contato

📧 Email: mjrmolinllo@icloud.com

🌐 GitHub: https://github.com/Waidemannm/lariel_front

## ⚙ Instalação

⸻

```bash
# Clone o repositório
git clone https://github.com/Waidemannm/lariel_front.git

# Entre na pasta do projeto
cd lariel_front

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
