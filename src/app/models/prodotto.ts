export class Prodotto {
  id: number;
  titolo: string;
  body: string;
  price: number;

    constructor(id: number=0, name: string='', description: string='', price: number=0){
      this.id = id
      this.titolo = name
      this.body = description
      this.price = price
  }
}
