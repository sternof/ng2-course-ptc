
import {NgModule} from "@angular/core";
import {TodoList} from "./todo-list.provider";
import {Logger} from "./logger.provider";

@NgModule({
  providers: [
      TodoList,
      Logger
  ]
})


export class ModelsModule {}