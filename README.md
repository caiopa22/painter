# 🎨 Painter - Interactive Drawing Application

<div align="center">

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.7-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.12.2-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)

*Uma aplicação interativa de desenho que permite criar formas geométricas coloridas em tempo real*

[🚀 Demo](#-demonstração) • [💻 Instalação](#-instalação) • [🎯 Funcionalidades](#-funcionalidades) • [👥 Equipe](#-equipe)

</div>

---

## 📖 Sobre o Projeto

O **Painter** é uma aplicação web interativa desenvolvida como parte de uma atividade de Computação Gráfica. O projeto permite que usuários criem desenhos selecionando formas geométricas e cores, visualizando tanto o resultado no canvas quanto o código JavaScript gerado em tempo real.

### ✨ Características Principais

- 🎨 **Interface Intuitiva**: Design moderno e responsivo
- 🔷 **Formas Geométricas**: Quadrado, triângulo e círculo
- 🌈 **Seleção de Cores**: Paleta de cores dinâmica
- 💻 **Código em Tempo Real**: Visualização do JavaScript gerado
- 🎭 **Animações Fluidas**: Powered by Framer Motion
- 📱 **Design Responsivo**: Funciona em todos os dispositivos

---

## 🚀 Demonstração

### Interface Principal
![Interface do Painter](./docs/interface-demo.png)

### Funcionalidades em Ação
![Desenho sendo criado](./docs/drawing-demo.png)

---

## 💻 Instalação

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/painter.git
   cd painter
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   ```
   http://localhost:5173
   ```

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Visualiza o build de produção
npm run lint     # Executa o linter ESLint
```

---

## 🎯 Funcionalidades

### 🔧 Funcionalidades Principais

| Funcionalidade | Descrição |
|----------------|-----------|
| **Seleção de Formas** | Escolha entre quadrado, triângulo e círculo |
| **Paleta de Cores** | Interface para seleção de cores |
| **Canvas Interativo** | Área de desenho utilizando HTML5 Canvas |
| **Código Dinâmico** | Exibição do JavaScript usado para criar o desenho |
| **Reset Canvas** | Limpa o canvas para novos desenhos |

### 🎨 Formas Disponíveis

- **🔲 Quadrado**: Forma geométrica regular de 4 lados
- **🔺 Triângulo**: Polígono de 3 vértices
- **⭕ Círculo**: Forma circular perfeita

### 🌈 Sistema de Cores

- Interface intuitiva de seleção
- Cores vibrantes e contrastantes
- Aplicação dinâmica no canvas

---

## 🛠️ Tecnologias Utilizadas

<table>
<tr>
<td align="center">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="50" height="50" alt="React"/>
<br><strong>React 19.1.0</strong>
<br><em>Framework principal</em>
</td>
<td align="center">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" width="50" height="50" alt="TailwindCSS"/>
<br><strong>TailwindCSS 4.1.7</strong>
<br><em>Estilização</em>
</td>
<td align="center">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="50" height="50" alt="JavaScript"/>
<br><strong>Framer Motion 12.12.2</strong>
<br><em>Animações</em>
</td>
<td align="center">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" width="50" height="50" alt="Vite"/>
<br><strong>Vite 6.3.5</strong>
<br><em>Build tool</em>
</td>
</tr>
</table>

---

## 🏗️ Estrutura do Projeto

```
painter/
├── 📁 public/           # Arquivos estáticos
├── 📁 src/              # Código fonte principal
│   ├── 📁 components/   # Componentes React
│   ├── 📁 styles/       # Estilos CSS
│   ├── 📁 utils/        # Funções utilitárias
│   └── 📄 main.jsx      # Ponto de entrada
├── 📄 package.json      # Dependências do projeto
├── 📄 vite.config.js    # Configuração do Vite
├── 📄 tailwind.config.js # Configuração do Tailwind
└── 📄 README.md         # Este arquivo
```

---

## 👥 Equipe

<table align="center">
<tr>
<td align="center">
<img src="https://github.com/caiopa22.png" width="100" height="100" style="border-radius: 50%;" alt="Caio Pacheco"/>
<br><strong>Caio Pacheco</strong>
<br><em>UI/UX Designer</em>
<br><em>React Developer</em>
<br><code>RA: N0896951</code>
</td>
<td align="center">
<img src="https://github.com/kaykycrespo.png" width="100" height="100" style="border-radius: 50%;" alt="Kayky Crespo"/>
<br><strong>Kayky Crespo</strong>
<br><em>Creative Designer</em>
<br><em>React Developer</em>
<br><code>RA: G839226</code>
</td>
<td align="center">
<img src="https://github.com/LuLacrd.png" width="100" height="100" style="border-radius: 50%;" alt="Luiza Lacerda"/>
<br><strong>Luiza Lacerda</strong>
<br><em>Project Lead</em>
<br><em>Quality Assurance</em>
<br><code>RA: G4818H2</code>
</td>
</tr>
</table>

---

## 📚 Como Usar

### 1. Seleção de Forma
- Clique em uma das formas disponíveis (quadrado, triângulo, círculo)
- A forma selecionada será destacada visualmente

### 2. Escolha da Cor
- Use o seletor de cores para escolher a cor desejada
- A cor será aplicada à próxima forma desenhada

### 3. Desenhar
- Clique no botão "Draw Shape" para criar a forma no canvas
- A forma aparecerá no centro do canvas com a cor selecionada

### 4. Visualizar Código
- O código JavaScript usado para criar o desenho será exibido automaticamente
- Use este código para aprender sobre programação gráfica

---

## 🎓 Objetivos Educacionais

Este projeto foi desenvolvido para demonstrar:

- **Conceitos de Computação Gráfica**: Uso do HTML5 Canvas
- **Programação Interativa**: Interface responsiva a ações do usuário
- **Desenvolvimento Web Moderno**: React, TailwindCSS e Vite
- **Trabalho em Equipe**: Colaboração e divisão de tarefas
- **Documentação**: Boas práticas de documentação de código

---

## 🔧 Configuração de Desenvolvimento

### ESLint
O projeto utiliza ESLint para manter a qualidade do código:

```bash
npm run lint
```

### Tailwind CSS
Configuração personalizada para o design system:

```javascript
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Customizações aqui
    }
  }
}
```

---

## 📄 Licença

Este projeto é parte de uma atividade acadêmica de Computação Gráfica.

---

## 🤝 Contribuindo

Como este é um projeto acadêmico, contribuições externas não são aceitas. No entanto, feedback e sugestões são sempre bem-vindos!

---


<div align="center">


*Projeto de Computação Gráfica - 2025*

[⬆ Voltar ao topo](#-painter---interactive-drawing-application)

</div>