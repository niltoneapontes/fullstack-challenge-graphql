import path from 'path';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import "reflect-metadata";
import { UserResolver } from './src/resolvers/UserResolver';

async function main() {
  const schema = await buildSchema({
    resolvers: [
      UserResolver
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