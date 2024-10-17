// Importa os módulos necessários para trabalhar com SQLite
import sqlite3 from "sqlite3"; //Importa o SQLite3 para trabalhar com SQLite
import { open } from "sqlite"; //Importa a função 'open' do pacote 'sqlite'

// Define uma função 'openDb' para abrir uma conexão com o banco de dados
export async function openDb() {
  // Abre uma conexão com o banco de dados
  // utilizando o arquivo './database.db' como localização
  return open({
    filename: "./database.db", // Caminho do arquivo do banco de dados
    driver: sqlite3.Database, // Usa o driver 'sqlite3' para acessar o banco de dados
  });
}
