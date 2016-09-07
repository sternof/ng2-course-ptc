import {NgModule} from "@angular/core";
import {ListStorage} from "./storage";
import {Item} from "../todo-app/providers/item.model";
import {HttpModule} from "@angular/http";
import {CountPipe} from "../todo-app/count.pipe";


@NgModule({
  providers: [
    ListStorage,
    {provide: Item, useValue: Item},
  ],
  imports  : [HttpModule]
})

export class PtcCoreModule {}