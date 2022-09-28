## Exemplo de uso do TypeORM, Express e PostgreSQL

- Neste exemplo os dados das tabelas são persistidos no SGBD PostgreSQL da nuvem ElephantSQL.
- A URL de acesso ao banco na ElephantSQL está no arquivo `.env`.
- Os parâmetros de conexão com o SGBD estão no arquivo `src/app-data-source.ts`.
- As entidades estão na pasta `src/entity`. As entidades `usuario` e `gasto` serão persistidas como tabelas do SGBD. Existe um relacionamento 1:n, um usuário pode ter vários gastos.
- A hirarquia de rotas está definida na pasta `src/routes`.
- A inicialização do servidor está no arquivo `src/index.ts` e para rodar a aplicação, em modo de desenvolvimento, usa-se o comando `npm run dev` e, em modo de produção, `npm run start`. Esses comandos foram definidos no arquivo de `package.json` da aplicação: 
```
"scripts": {
   "dev": "ts-node-dev src/index.ts",
   "start": "ts-node src/index.ts"
}
``` 