
import {Injectable} from "@angular/core";

@Injectable()
export class Item {

  public title:string;
  public done:boolean;

  constructor(title:string) {
    this.title = title;
    this.done  = false;
  }

}