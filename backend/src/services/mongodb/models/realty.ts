import mongoose from 'mongoose';
const { Schema } = mongoose;

export const realtySchema = new Schema({
  id: String,
  title: String,
  description: String,
  price: Number,
  address: String,
  city: String,
  state: String,
  cep: String,
  contractType: String,
  area: Number,
  rooms: Number,
  bathroom: Number,
  garage: Number,
  imageUrls: Array,
});

export const Realty = mongoose.model('Realty', realtySchema);