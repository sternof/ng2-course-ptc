
import {NgModule} from "@angular/core";
import {TodoAppComponent} from "./todo-app.component";
import {TODO_COMPONENTS} from "./components/index";

@NgModule({
  declarations: [
      TodoAppComponent,
      ...TODO_COMPONENTS
  ],
  exports: [TodoAppComponent]
})

export class TodoAppModule {}