export class Product {
  id: string;
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.id = Date.now().toString();
    this.name = name;
    this.price = price;
  }
}
export const mockedProducts: Product[] = [
  {
    id: "1",
    name: "Morötter",
    price: 25
  },
  {
    id: "2",
    name: "Gurka",
    price: 10
  },
  {
    id: "3",
    name: "Palsternacka",
    price: 12
  }
];
