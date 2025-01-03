import { Router } from "express";

import { CidadesController } from "../controllers";

const router = Router();

// endpoints

router.get("/", (_, res) => {
    res.send("Rota teste...");
});


router.post("/cidades", CidadesController.createValidator, CidadesController.create);
router.get("/cidades", CidadesController.getAllValidator, CidadesController.getAll);
router.get("/cidades/:id", CidadesController.getByIdValidator, CidadesController.getById);
router.delete("/cidades/:id", CidadesController.deleteValidator, CidadesController.deleteById);
router.put("/cidades/:id", CidadesController.updateValidator, CidadesController.updateById);


export { router };
