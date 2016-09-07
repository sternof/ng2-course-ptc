import {NgModule} from "@angular/core";
import {ListStorage} from "./storage";
import {Item} from "../todo-app/providers/item.model";
import {HttpModule} from "@angular/http";
import {Api} from "./api";


@NgModule({
  providers: [
    ListStorage,
    Api,
    {provide: Item, useValue: Item},
  ],
  imports  : [HttpModule]
})

export class PtcCoreModule {}