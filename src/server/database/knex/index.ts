import { knex } from "knex";
import { development, production } from "./Environment";

const getKnexConfig = () => {
    const configs = {
        dev: development,
        prod: production
    }

    return configs[process.env.NODE_ENV as "dev" | "prod"];
}

const Knex = knex(getKnexConfig());

export { Knex };
// retorna instancia do knex configurada :)