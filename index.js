const express = require('express');
const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Aqui você pode adicionar a lógica de validação do login e senha
  // Por exemplo, você pode verificar se o username e password correspondem a um usuário válido no banco de dados

  if (username === 'admin' && password === 'password') {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

module.exports = app;