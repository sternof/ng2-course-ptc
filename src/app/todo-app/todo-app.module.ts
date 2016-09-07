import {NgModule} from "@angular/core";
import {TodoAppComponent} from "./todo-app.component";
import {TODO_COMPONENTS} from "./components/index";
import {BrowserModule} from "@angular/platform-browser";
import {TodoList} from "./providers/todo-list.provider";

@NgModule({
  declarations: [
    TodoAppComponent,
    ...TODO_COMPONENTS
  ],
  imports     : [BrowserModule],
  providers   : [TodoList],
  exports     : [TodoAppComponent]
})

export class TodoAppModule {
}