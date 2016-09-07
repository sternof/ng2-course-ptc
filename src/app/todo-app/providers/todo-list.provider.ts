import {Item} from "./item.model";
import {ListStorage} from "../../ptc-core/storage";
import {Injectable} from "@angular/core";
import {Api} from "../../ptc-core/api";

@Injectable()
export class TodoList {

  public items:Item[];
  private storage:ListStorage;
  private item:any;

  constructor(storage:ListStorage, _item:Item, api: Api) {
    this.items   = [];
    this.storage = storage;
    this.item    = _item;

    api.get('http://localhost:3001/items')
        .map( result => result.json() )
        .do( data => console.log(data) )
        .subscribe( (items:Item[]) => this.items = items)
  }

  public addItem(title:string) {
    this.items.push(new this.item(title));
    this.storage.setItem(this.items);
  }

  public removeItem(item:Item) {
    let _index = this.items.indexOf(item);
    this.items.splice(_index, 1);
    this.storage.setItem(this.items);
  }

  public toggleDone(item:Item) {
    item.done = !item.done;
  }

}