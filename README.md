# 🚀 Portfolio Moderno - José Fernando

Bem-vindo ao repositório do meu portfolio pessoal! Este é um projeto desenvolvido com o objetivo de apresentar meus trabalhos, habilidades e experiências como **Desenvolvedor Full Stack**, utilizando as tecnologias mais modernas e performáticas do ecossistema Web.

<img src="./public/portfolio.png">

## ✨ Destaques

O projeto foca em uma experiência de usuário (UX) fluida, com design minimalista em tons de preto e branco, animações dinâmicas e um sistema de gerenciamento de conteúdo (CMS) próprio.

- **Matrix Rain Effect:** Fundo temático interativo inspirado no filme Matrix.
- **GSAP Animations:** Transições suaves e efeitos de scroll modernos.
- **Painel Administrativo:** Interface privada para gerenciamento em tempo real de projetos e mensagens.
- **Supabase Integration:** Backend as a Service para autenticação, banco de dados e armazenamento de imagens.
- **Design Responsivo:** Otimizado para todos os tamanhos de tela.

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19:** Framework principal para construção da interface.
- **Vite:** Build tool extremamente rápida.
- **TypeScript:** Tipagem estática para maior segurança e produtividade.
- **Tailwind CSS 4:** Estilização moderna e eficiente.
- **GSAP (GreenSock):** Motor de animações de alta performance.
- **React Router 7:** Gerenciamento de rotas e navegação.
- **React Icons:** Biblioteca de ícones versátil.

### Backend & Ferramentas
- **Supabase:** Banco de dados PostgreSQL, Autenticação e Storage.
- **ESLint:** Padronização e qualidade de código.

## 📁 Estrutura do Projeto

```text
src/
├── assets/          # Imagens e arquivos estáticos
├── components/      # Componentes reutilizáveis (UI, Seções, Admin)
├── context/         # Contextos globais do React
├── lib/             # Configurações de bibliotecas externas (Supabase)
├── pages/           # Páginas principais e rotas do sistema
│   └── admin/       # Páginas restritas do painel de controle
└── App.tsx          # Configuração de rotas e layout base
```

## 🚀 Como Executar o Projeto Localmente

Siga os passos abaixo para rodar o projeto em sua máquina de desenvolvimento:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/joseavfernando/my-portfolio2
   cd my-portfolio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto com suas credenciais do Supabase:
   ```env
   VITE_SUPABASE_URL=sua_url_do_supabase
   VITE_SUPABASE_ANON_KEY=sua_chave_anonima
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   O projeto estará disponível em `http://localhost:5173`  jd.

## 🚀 Deploy na Vercel

Para publicar este projeto na Vercel, siga os passos abaixo:

1. **Suba o projeto para o GitHub**
   ```bash
   git add .
   git commit -m "Prepare project for Vercel deploy"
   git push origin main
   ```

2. **Acesse o Vercel**
   - Vá para https://vercel.com
   - Faça login com a conta GitHub
   - Clique em `New Project`
   - Selecione o repositório do portfolio

3. **Configure o projeto**
   - Framework: `Vite`
   - Root Directory: `.`
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Adicione as variáveis de ambiente**
   No painel da Vercel, em `Settings > Environment Variables`, adicione:
   ```env
   VITE_SUPABASE_URL=https://seu-projeto.supabase.co
   VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
   ```

5. **Deploy**
   - Clique em `Deploy`
   - A Vercel irá rodar o build automaticamente

### Observações importantes
- A rota do painel administrativo usa `BrowserRouter`, então o arquivo `vercel.json` foi adicionado para garantir que todas as rotas voltem para o `index.html`.
- O arquivo `.env` não deve ser enviado para o GitHub. Use as variáveis no painel da Vercel.

---

## 🎨 Design System

O projeto utiliza uma paleta de cores monocromática para transmitir sofisticação e foco no conteúdo:
- **Fundo:** `#000000` (Pitch Black)
- **Texto Primário:** `#FFFFFF` (Pure White)
- **Destaques:** Tons de cinza e verde esmeralda sutil para elementos interativos.

---

Desenvolvido com ❤️ por [José Fernando](https://github.com/joseavfernando).
