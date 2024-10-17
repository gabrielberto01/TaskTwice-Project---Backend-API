// Importa a função 'openDb' do arquivo '../configDB.js'
import { openDb } from "../configDB.js";

// Define uma função assíncrona 'selectImagem' para manipular requisições HTTP
export async function selectImagem(req, res) {
  // Obtém os dados da imagem da requisição
  let imagem = req.body;

  // Abre a conexão com o banco de dados usando a função 'openDb'
  openDb().then((db) => {
    // Executa uma consulta para obter dados da tabela 'Imagem'
    db.get("SELECT * FROM Imagem WHERE imagem=?", [id]).then((user) =>
      // Retorna os dados da imagem em formato JSON como resposta
      res.json(user),
    );
  });
}
