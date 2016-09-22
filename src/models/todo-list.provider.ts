


import {Item} from "./item";
import {Injectable} from "@angular/core";

@Injectable()
export class TodoList {

  public items:Item[];

  constructor() {
    this.items = [];
  }

  setDone(item: Item, flag:boolean){
    item.done = flag;
    this.items = [...this.items]
  }

  addItem(text:string) {
    this.items = [ ...this.items, new Item(text) ];
  }

  removeItem(item:Item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}