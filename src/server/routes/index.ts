import { Router } from "express";

import { CidadesController } from "../controllers";

const router = Router();

// endpoints

router.get("/", (_, res) => {
    res.send("Rota teste...");
});

// passa o metodo create de cidade que recebe os parametros req e res
router.post("/cidades", CidadesController.createValidator, CidadesController.create);

export { router };
