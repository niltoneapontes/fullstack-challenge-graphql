import mongoose from "mongoose";
import { Realty } from "../../models/Realty";
import { realtySchema } from "./models/realty";

export async function createMongoConnection() {
  return await mongoose.connect('mongodb://localhost:27017/myimob');
}

export const getAllRealtiesOnMongo = async () => {
  try {
    const connection = await createMongoConnection();
  const Realty = connection.model('Realty', realtySchema);
  return await Realty.find();
  } catch(error: any) {
    throw new Error(error);
  }
}

export const createRealtyOnMongo = async (realty: Realty) => {
  try {
    const connection = await createMongoConnection();
    const Realty = connection.model('Realty', realtySchema);
    const newRealty = new Realty({
        id: realty.id,
        title: realty.title,
        description: realty.description,
        price: realty.price,
        address: realty.address,
        city: realty.city,
        state: realty.state,
        cep: realty.cep,
        contractType: realty.contractType,
        area: realty.area,
        rooms: realty.rooms,
        bathroom: realty.bathroom,
        garage: realty.garage,
        imageUrls: realty.imageUrls,
    });
    return await newRealty.save();
  } catch(error: any) {
    throw new Error(error);
  }
}

export const updateRealtyOnMongo = async (realty: Realty) => {
  try {
    const connection = await createMongoConnection();
    const Realty = connection.model('Realty', realtySchema);
    return await Realty.findOneAndUpdate({ id: realty.id }, realty);
  } catch(error: any) {
    throw new Error(error);
  }
}

export const deleteRealtyOnMongo = async (id: string) => {
  try {
    const connection = await createMongoConnection();
    const Realty = connection.model('Realty', realtySchema);
    return await Realty.findOneAndDelete({ id: id });
  } catch(error: any) {
    throw new Error(error);
  }
}