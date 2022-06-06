import path from 'path';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import "reflect-metadata";
import { RealtyResolver } from './src/resolvers/RealtyResolver';

async function main() {
  const schema = await buildSchema({
    resolvers: [
      RealtyResolver
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  })

  const server = new ApolloServer({
    schema
  });

  const {url} = await server.listen();

  console.info('Server is running at', url);
}

main();