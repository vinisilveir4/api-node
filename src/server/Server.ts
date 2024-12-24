import express from "express";
import "dotenv/config" // disponibiliza as variaveis ambiente pra aplicação

import { router } from "./routes";

const server = express(); // cria instancia do express

server.use(express.json());
server.use(router);

export { server };
