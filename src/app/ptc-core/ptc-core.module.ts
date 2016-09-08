import {NgModule} from "@angular/core";
import {ListStorage} from "./storage";
import {Item} from "../todo-app/providers/item.model";
import {HttpModule} from "@angular/http";
import {Api} from "./api";
import {PtcAuthGuerd} from "./ptc-auth-guerd";


@NgModule({
  providers: [
    ListStorage,
    PtcAuthGuerd,
    Api,
    {provide: Item, useValue: Item},
  ],
  imports  : [HttpModule]
})

export class PtcCoreModule {}