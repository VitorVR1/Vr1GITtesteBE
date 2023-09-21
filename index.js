// Importa os módulos express e body-parser
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

// Cria um aplicativo express
const app = express();

// Usa o middleware body-parser para analisar os corpos das solicitações
app.use(bodyParser.json());

// Define um objeto de usuários para simplificar. Em uma aplicação real, você usaria um banco de dados.
const users = {
  'usuario1': 'senha1',
  'usuario2': 'senha2'
};

// Define uma rota POST /login
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Verifica se o nome de usuário e a senha estão corretos
  if (users[username] && users[username] === password) {
    res.status(200).send({ message: 'Login bem-sucedido' });
  } else {
    res.status(401).send({ message: 'Nome de usuário ou senha inválidos' });
  }
});
