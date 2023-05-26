export class ItemsViewer {
  
    id: number;
    name: string;
    price: number;
    photo: string;
    
  constructor(id: number, name: string, price: number, photo: string){
    this.id = id;
    this.name = name;
    this.price = price;
    this.photo = photo;
  }
}
