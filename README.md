# 🩺 Sistema de Agendamentos - Flask

Este é um sistema simples de agendamentos desenvolvido com **Flask**, **HTML**, **CSS**, e **Bootstrap**. Permite cadastrar, listar, editar e excluir agendamentos.

---

## 🚀 Tecnologias Utilizadas

- **Python 3**
- **Flask**
- **SQLite** 
- **HTML, CSS e Bootstrap**
- **JavaScript**

---

## 📂 Estrutura do Projeto

```
DESAFIO-TS/
│── static/              # Arquivos estáticos (CSS, JS, imagens)
│   ├── style.css        # Estilos da aplicação
│   ├── script.js        # Funcionalidades do frontend
│
│── templates/           # Templates HTML
│   ├── index.html       # Página principal
│
│── app.py               # Arquivo principal da aplicação Flask
│── routes.py            # Rotas da aplicação
│── models.py            # Modelos de banco de dados
│── database.py          # Configuração do banco de dados
│── README.md            # Documentação do projeto
│── venv/                # Ambiente virtual Python (se criado)
```

---

## ⚙️ Como Executar o Projeto

### 1️⃣ **Clone o Repositório**

```bash
git clone https://github.com/matheuslkj/desafio-ts.git
cd desafio-ts
```

### 2️⃣ **Crie um Ambiente Virtual (Opcional, mas Recomendado)**

```bash
python -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate
```

### 3️⃣ **Execute a Aplicação**

```bash
flask run
```

Acesse no navegador: [http://127.0.0.1:5000](http://127.0.0.1:5000)

---

## 🛠️ Configuração do Banco de Dados

Caso esteja utilizando **SQLite**, verifique se o arquivo `database.py` já inicializa o banco corretamente.

Se for necessário criar as tabelas, execute:

```bash
python database.py
```

---

## ✨ Funcionalidades

✅ Cadastro de agendamentos\
✅ Listagem de agendamentos\
✅ Edição e exclusão de agendamentos\
✅ Interface responsiva com Bootstrap

---


Desenvolvido por [Matheus de Freitas](https://github.com/matheuslkj)

