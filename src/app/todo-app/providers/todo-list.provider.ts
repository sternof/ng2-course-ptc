import {Item} from "./item.model";


export class TodoList {

  public items: Item[];

  constructor() {
    this.items = [];
  }

  public addItem(title: string) {
    this.items.push(new Item(title));
  }

  public removeItem(item: Item){
    let _index = this.items.indexOf(item);
    this.items.splice(_index, 1);
  }

}