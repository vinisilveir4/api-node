import { Knex } from "knex";

// migration de criação de tabela 
export async function up(knex: Knex): Promise<void> {
    return knex
    .schema
    .createTable("cidade", table => {
        table.bigIncrements("id").primary().index(); // chave primaria e campo indexado otimizando busca
        table.string("nome", 150).notNullable();
    })
    .then(() => console.log("# Tabela cidade criada"))
}

// exclui/faz um rollback na tabela
export async function down(knex: Knex): Promise<void> {
    return knex
    .schema.dropTable("cidade")
    .then(() => console.log("# Tabela cidade excluida"))
}
