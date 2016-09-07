
import {Injectable} from "@angular/core";

@Injectable()
export class ListStorage {

  private key: string = "LIST";

  setItem(data){
    window.localStorage.setItem(this.key, JSON.stringify(data));
  }

  getItem(){
    return JSON.parse(window.localStorage.getItem(this.key))
  }

}