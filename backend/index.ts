import path from 'path';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import "reflect-metadata";
import { RealtyResolver } from './src/resolvers/RealtyResolver';
import { createMongoConnection } from './src/services/mongodb';

async function main() {
  const schema = await buildSchema({
    resolvers: [
      RealtyResolver
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  })

  createMongoConnection().then((response) => console.info('MongoDB connected')).catch((error) => console.error('Could not connect to MongoDB. ', error));

  const server = new ApolloServer({
    schema
  });

  const {url} = await server.listen();

  console.info('Server is running at', url);
}

main();