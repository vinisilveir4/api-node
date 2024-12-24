import { server } from "./server/Server";

// define a porta do servidor
server.listen(process.env.PORT || 3333, () =>
    console.log(`App rodando na porta ${process.env.PORT || 3333}`));

