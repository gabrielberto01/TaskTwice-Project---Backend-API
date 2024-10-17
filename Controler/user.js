// Importa a função 'openDb' do arquivo '../configDB.js'
import { openDb } from "../configDB.js";

// Define uma função assíncrona 'insertUser' para inserir um usuário no banco de dados
export async function insertUser(req, res) {
  // Obtém os dados do usuário da requisição
  let user = req.body;

  console.log(user.nome);

  // Abre a conexão com o banco de dados usando a função 'openDb'
  openDb().then((db) => {
    // Executa uma operação de inserção na tabela 'user' com os dados fornecidos
    db.run("INSERT INTO user (nome) VALUES (?)", [user.nome]);
  });

  //console.log("passei aqui");

  // Retorna uma resposta JSON indicando sucesso
  res.json({
    statusCode: 200,
  });
}

// Define uma função assíncrona 'updateUser' para atualizar um usuário no banco de dados
export async function updateUser(req, res) {
  // Obtém os dados do usuário da requisição
  let user = req.body;

  // Abre a conexão com o banco de dados usando a função 'openDb'
  openDb().then((db) => {
    // Executa uma operação de atualização na tabela 'user' com os dados fornecidos
    db.run("UPDATE user SET nome=?", [user.nome]);
  });

  // Retorna uma resposta JSON indicando sucesso
  res.json({
    statusCode: 200,
  });
}

// Define uma função assíncrona 'selectUser' para selecionar um usuário do banco de dados
export async function selectUser(req, res) {
  // Obtém os dados do usuário da requisição
  let user = req.body;
  try {
    const db = await openDb();
    const result = await db.get(
      "SELECT nome FROM user ORDER BY id DESC LIMIT 1;",
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error("Erro ao consultar o banco de dados:", error);
    res.status(500).json({ error: "Erro ao consultar o banco de dados" });
  }
}
