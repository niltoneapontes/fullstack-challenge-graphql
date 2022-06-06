interface RealtyProps {
  title: string;
  description: string;
  price: number;
  address: string;
  city: string;
  state: string;
  cep: string;
  contractType: string;
  area: number;
  rooms: number;
  bathroom: number;
  garage: number;
  imageUrls: Array<string>;
}

export class Realty {
  public title: string;
  public description: string;
  public price: number;
  public address: string;
  public city: string;
  public state: string;
  public cep: string;
  public contractType: string;
  public area: number;
  public rooms: number;
  public bathroom: number;
  public garage: number;
  public imageUrls: Array<string>;

  constructor(
{    title,
    description,
    price,
    address,
    city,
    state,
    cep,
    contractType,
    area,
    rooms,
    bathroom,
    garage,
    imageUrls
} : RealtyProps) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.address = address;
    this.city = city;
    this.state = state;
    this.cep = cep;
    this.contractType = contractType;
    this.area = area;
    this.rooms = rooms;
    this.bathroom = bathroom;
    this.garage = garage;
    this.imageUrls = imageUrls;
  }
}