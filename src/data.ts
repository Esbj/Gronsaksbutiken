export class Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  constructor(name: string, price: number, quantity: number) {
    this.quantity = quantity;
    this.id = Date.now().toString();
    this.name = name;
    this.price = price;
  }
}
export const mockedProducts: Product[] = [
  {
    id: "1",
    name: "Morötter",
    price: 25,
    quantity: 1
  },
  {
    id: "2",
    name: "Gurka",
    price: 10,
    quantity: 1
  },
  {
    id: "3",
    name: "Palsternacka",
    price: 12,
    quantity: 1
  }
];
