import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Realty {
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
  imageUrls: Array<string>;
}