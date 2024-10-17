// Importa a função 'openDb' do arquivo '../configDB.js'
import { openDb } from "../configDB.js";

// Define uma função assíncrona 'selectPalavras' para manipular requisições HTTP
export async function selectPalavras(req, res) {
  // Obtém os dados da palavra da requisição
  let palavra = req.body;

  // Abre a conexão com o banco de dados usando a função 'openDb'
  openDb().then((db) => {
    // Executa uma consulta para obter todas as palavras da tabela 'Palavras'
    db.all("SELECT * FROM Palavras").then((resultados) => {
      // Retorna os resultados da consulta como resposta
      res.json(resultados);
    });
  });
}
