//Importação das rotas e do Express.
import { Router } from "express";
import { insertUser, selectUser, updateUser } from "./Controler/user.js";
import { selectPalavras } from "./Controler/Palavras.js";
import { selectImagem } from "./Controler/Imagem.js";

//Variável da Rota.
var router = Router();

//Chamadas de rotas.
router.get("/usersearch", selectUser);
router.post("/user", insertUser);
router.put("/user", updateUser);

router.get("/palavras", selectPalavras);

router.get("/imagem", selectImagem);

//Variável para exportar rotas.
export default router;
