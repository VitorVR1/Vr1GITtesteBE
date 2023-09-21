// Importa o módulo HTTP, que é necessário para criar um servidor HTTP básico
const http = require('http');

// Cria um servidor HTTP que responde com "Olá, mundo!" para todas as solicitações
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Olá, mundo!\n');
});

// O servidor escuta na porta 3001
const port = process.env.port || 3001;
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
