

import {CanActivate} from "@angular/router";
import {store} from "./app.store";

export class IsUser implements CanActivate{

  canActivate():boolean{
    return store.getState().user !== null;
  }
}