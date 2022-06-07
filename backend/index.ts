import path from 'path';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import "reflect-metadata";
import { RealtyResolver } from './src/resolvers/RealtyResolver';
import { createMongoConnection, createRealty, deleteRealty, getAllRealties, updateRealty } from './src/services/mongodb';

async function main() {
  const schema = await buildSchema({
    resolvers: [
      RealtyResolver
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  })

  createMongoConnection().then((response) => console.info('MongoDB connected')).catch((error) => console.error('Could not connect to MongoDB. ', error));

  // const created = await createRealty({
  //   id: '3',
  //   title: 'Casa em Recife',
  //   description: 'Casa em Recife',
  //   price: 100000,
  //   address: 'Rua da Iguaçu',
  //   city: 'Nova Iguaçu',
  //   state: 'Rio de Janeiro',
  //   cep: '22222222',
  //   contractType: 'Aluguel',
  //   area: 100,
  //   rooms: 2,
  //   bathroom: 1,
  //   garage: 1,
  //   imageUrls: ['https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'],
  // });

  // const realties = await getAllRealties();

  // const updatedRealty = await updateRealty(
  //   { "id": "1",  "title": "Casa em Recife!",  "description": "Casa nas Gracas",  "price": 100000,  "address": "Rua da Iguaçu",  "city": "Nova Iguaçu",  "state": "Rio de Janeiro",  "cep": "22222222",  "contractType": "Aluguel",  "area": 100,  "rooms": 2,  "bathroom": 1,  "garage": 1,  "imageUrls": [    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"  ],}
  // )

  const deletedRealty = await deleteRealty('2');

  const server = new ApolloServer({
    schema
  });

  const {url} = await server.listen();

  console.info('Server is running at', url);
}

main();