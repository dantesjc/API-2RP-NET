import * as express from "express";
import * as cors from "cors";
import * as dotenv from 'dotenv';
import * as swaggerUI from 'swagger-ui-express';
import routes from './routes'

dotenv.config()

const swaggerOptions = {
    "openapi": "3.0.1",
    "info": {
        "title": "API 2RP - NET",
        "description": "API Documentation",
    },
    "basePath": "/",
}

const PORT = process.env.PORT || 3000

const app = express() // cria o servidor
app.use(express.json()) // suporta parâmetros JSON no body da requisição
app.use(cors()) // suporta requisições de qualquer domínio
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerOptions))


// inicializa o servidor na porta especificada
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))

app.use(routes)