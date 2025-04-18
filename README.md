# 🎬 Prime Flix

Catálogo de filmes criado durante o curso **Sujeito Programador**, onde você pode visualizar os filmes em cartaz, salvar seus favoritos e consultar informações detalhadas sobre cada filme.

---

## 🚀 Tecnologias utilizadas

- **React.js**
- **React Router DOM**
- **Axios**
- **JavaScript**
- **HTML/CSS**
- **LocalStorage**

---

## 🧠 O que aprendi com este projeto:

✔️ Integração com APIs externas usando Axios  
✔️ Gerenciamento de rotas com React Router  
✔️ Manipulação de estados com useState e useEffect  
✔️ Armazenamento de dados no navegador com LocalStorage  
✔️ Componentização e boas práticas no React  
✔️ Tratamento de erros e redirecionamentos  
✔️ Estilização e responsividade com CSS

---

## 🔗 API utilizada

- [The Movie Database (TMDb)](https://www.themoviedb.org/)

---

## 🖼️ Funcionalidades

### 🏠 Página Home

- Lista os 10 filmes em cartaz no momento.
- Cada filme exibe título, pôster e botão para mais detalhes.

### ℹ️ Página de Detalhes

- Exibe título, imagem, sinopse e avaliação do filme.
- Permite salvar o filme na lista de favoritos.
- Link para buscar o trailer no YouTube.

### 💖 Página de Favoritos

- Lista os filmes que o usuário salvou.
- Permite excluir filmes da lista.

---

## 🧪 Estrutura de pastas

```bash
📁 src
├── 📁 pages
│   ├── 📁 Home         # Página inicial com listagem dos filmes
│   ├── 📁 Filme        # Página de detalhes do filme
│   └── 📁 Favoritos    # Página com filmes salvos
├── 📁 services
│   └── api.js          # Configuração do Axios
└── App.js              # Gerenciamento de rotas
```

---

## 💾 Armazenamento

Utiliza LocalStorage para salvar e excluir filmes favoritos de forma simples e eficiente, sem a necessidade de back-end.

---

## 🛠 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/fcdias0812/prime_flix.git

# Acesse a pasta
cd prime_flix

# Instale as dependências
npm install

# Rode o projeto
npm start
```

## 📌 Observações

- Este projeto é apenas para fins de aprendizado.
- A chave da API está visível no código por ser um projeto educacional.
- Para produção, o ideal é armazenar a chave em variáveis de ambiente.

📫 Contato
Feito com 💙 por Fabrício Dias.
📬 dias.fabricio0812@gmail.com
🔗 https://www.linkedin.com/in/fcdias0812/
