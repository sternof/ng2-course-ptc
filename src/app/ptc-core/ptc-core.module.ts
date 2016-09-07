
import {NgModule} from "@angular/core";
import {ListStorage} from "./storage";
import {Item} from "../todo-app/providers/item.model";
import {HttpModule, Http} from "@angular/http";
import {Api} from './api';


@NgModule({
  providers:[
    ListStorage,
    { provide: Api,
      useFactory: function (server) {
      let apiObject = new Api(server);

      apiObject.setBaseUrl('//api/v2/');
      return apiObject;
    }, deps: [Http] },

    { provide: Item,        useValue:Item },
  ],
  imports: [HttpModule]
})



export class PtcCoreModule{

}