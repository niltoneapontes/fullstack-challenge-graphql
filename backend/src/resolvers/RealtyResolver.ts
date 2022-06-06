import { Arg, Args, ArgsType, Field, ID, Mutation, Query, Resolver } from "type-graphql";
import { Realty } from "../models/Realty";
import crypto from 'crypto';


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

  private data: Realty[] = [];

  @Query(() => String)
  async hello() {
      return 'Hello GraphQL'
  }

  @Query(() => [Realty])
  async realtys() {
    return this.data;
  }



  @Mutation(() => Realty)
  async createRealty(
    @Args() { title, description, price, address, city, state, cep, contractType, area, rooms, bathroom, garage, imageUrls }: CreateRealtyArgs

  ) {
    const realty = {id: crypto.randomUUID(), title, description, price, address, city, state, cep, contractType, area, rooms, bathroom, garage, imageUrls};
    this.data.push(realty);
    return realty;
  }

  @Mutation(() => Realty)
  async deleteRealty(
    @Arg('id') id: string
    ) 
    {
    const realty = this.data.find(realty => realty.id === id);
    if (!realty) {
      throw new Error('Realty not found');
    }
    this.data = this.data.filter(realty => realty.id !== id);
    return realty;
  }

  @Mutation(() => Realty)
  async updateRealty(
    @Args() { id, title, description, price, address, city, state, cep, contractType, area, rooms, bathroom, garage, imageUrls }: UpdateRealtyArgs
  ) {
    const realty = this.data.find(Realty => Realty.id === id);
    if (!realty) {
      throw new Error('Realty not found');
    }
    realty.title = title;
    return realty;
  }
}