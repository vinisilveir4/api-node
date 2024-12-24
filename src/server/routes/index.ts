import { Router } from "express";

import {CidadesController} from "../controllers";

const router = Router();

// rotas (endpoints)
router.get("/", (_, res) => {
    res.send("Rota teste...");
});

// passa o metodo create de cidade que recebe os parametros req e res
router.post("/cidades", CidadesController.create);

export { router };
