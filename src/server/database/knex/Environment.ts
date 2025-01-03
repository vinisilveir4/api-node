import  { Knex } from "knex";
import path from "path" // resolução de path do proprio node

const development: Knex.Config = {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
        filename: path.resolve(__dirname, "..", "..", "..", "..", "database.sqlite") // volta pra pasta raiz do projeto
        // e cria o arquivo de dados do sqlite
        // dirname define q é a partir deste arquivo
    },
    migrations: {
        directory: path.resolve(__dirname, "..", "migrations") // diretorio onde estão as migrations
    },
    seeds: {
        directory: path.resolve(__dirname, "..", "seeds")
    },
    pool: {
        afterCreate: (connection: any, done: Function) => {
            connection.run("PRAGMA foreign_key = ON");
            done();
        }
    }
    // pool ativa o uso de chaves estrangeira no knex
};

const production: Knex.Config = { ...development };

export { development, production };