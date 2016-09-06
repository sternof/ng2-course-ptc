
import {NgModule} from "@angular/core";
import {TodoAppComponent} from "./todo-app.component";
import {TODO_COMPONENTS} from "./components/index";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
      TodoAppComponent,
      ...TODO_COMPONENTS
  ],
  imports:[BrowserModule],
  exports: [TodoAppComponent]
})

export class TodoAppModule {}