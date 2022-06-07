import { Arg, Args, ArgsType, Field, ID, Mutation, Query, Resolver } from "type-graphql";
import { Realty } from "../models/Realty";
import crypto from 'crypto';
import { createRealtyOnMongo, deleteRealtyOnMongo, getAllRealtiesOnMongo, updateRealtyOnMongo } from "../services/mongodb";

@ArgsType()
class CreateRealtyArgs {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  price: number;

  @Field()
  address: string;

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  cep: string;

  @Field()
  contractType: string;

  @Field()
  area: number;

  @Field()
  rooms: number;

  @Field()
  bathroom: number;

  @Field()
  garage: number;

  @Field(_type => [String])
  imageUrls: string[];
}

@ArgsType()
class UpdateRealtyArgs {
  @Field(_type => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  price: number;

  @Field()
  address: string;

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  cep: string;

  @Field()
  contractType: string;

  @Field()
  area: number;

  @Field()
  rooms: number;

  @Field()
  bathroom: number;

  @Field()
  garage: number;

  @Field(_type => [String])
  imageUrls: string[];
}

@Resolver()
export class RealtyResolver {
  @Query(() => [Realty])
  async realtys() {
    return getAllRealtiesOnMongo();
  }

  @Mutation(() => Realty)
  async createRealty(
    @Args() { title, description, price, address, city, state, cep, contractType, area, rooms, bathroom, garage, imageUrls }: CreateRealtyArgs

  ) {
    const newRealty = {id: crypto.randomUUID(), title, description, price, address, city, state, cep, contractType, area, rooms, bathroom, garage, imageUrls};
    const realty = await createRealtyOnMongo(newRealty);
    return realty;
  }

  @Mutation(() => Realty)
  async deleteRealty(
    @Arg('id') id: string
    ) 
    {
    const realty = await deleteRealtyOnMongo(id);
    return realty;
  }

  @Mutation(() => Realty)
  async updateRealty(
    @Args() { id, title, description, price, address, city, state, cep, contractType, area, rooms, bathroom, garage, imageUrls }: UpdateRealtyArgs
  ) {
    const realty = await updateRealtyOnMongo({id, title, description, price, address, city, state, cep, contractType, area, rooms, bathroom, garage, imageUrls});
    return realty;
  }
}