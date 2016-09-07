import {Item} from "./item.model";
import {ListStorage} from "../../ptc-core/storage";
import {Injectable} from "@angular/core";

@Injectable()
export class TodoList {

  public items: Item[];
  private storage: ListStorage;

  constructor(storage: ListStorage) {
    this.items = storage.getItem() || [];
    this.storage = storage;
  }

  public addItem(title: string) {
    this.items.push(new Item(title));
    this.storage.setItem(this.items);
  }

  public removeItem(item: Item){
    let _index = this.items.indexOf(item);
    this.items.splice(_index, 1);
    this.storage.setItem(this.items);
  }

}