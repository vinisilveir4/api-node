import { ICidade } from "../../models/Cidade";

// arquivos d.ts é utilizado pra declaração de tipos do typescript
// nesse arquivo expande os tipos do modulo knex relacionada as tabela
// e define as interfaces das tabelas

declare module "knex/types/tables" {
    interface Tables {
        cidade: ICidade;
    }
}