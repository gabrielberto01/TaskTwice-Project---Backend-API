// Importa o módulo http
import http from "http";

// Importa o módulo express
import express from "express";

import { openDb } from "./configDB.js";

// Cria uma instância do aplicativo Express
var app = express();

//analisa solicitações JSON
app.use(express.json());

// Obtém a porta do ambiente
var port = process.env.PORT || 3000;

// Importa as rotas definidas no arquivo routes.js
import router from "./routes.js";
app.use(router);

// Define uma rota para a raiz do aplicativo
app.get("/", (req, res) => {
  res.send("Hello from CodeSandbox!");
});

/*app.post("/user2", (req, res) => {
  //res.send(user);
  let user = req.body.nome;
  console.log("astrobaldo" + user);

  openDb().then((db) => {
    // Executa uma consulta para obter o nome do usuário da tabela 'user'
    db.get("SELECT nome FROM user WHERE nome=?", [user.nome]).then((user) => {
      // console.log(user);
      // Retorna o usuário encontrado como resposta em formato JSON
      res.json(user);
      /*res.json({
        statusCode: 200});*/


// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
