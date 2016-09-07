import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {TodoAppModule} from "./todo-app/todo-app.module";
import {TodoList} from "./todo-app/providers/todo-list.provider";

@NgModule({
  declarations: [AppComponent],
  imports     : [TodoAppModule],
  bootstrap   : [AppComponent]
})

export class AppModule {
}
