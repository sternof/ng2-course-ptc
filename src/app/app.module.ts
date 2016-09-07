import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {TodoAppModule} from "./todo-app/todo-app.module";
import {TodoList} from "./todo-app/providers/todo-list.provider";
import {PtcCoreModule} from "./ptc-core/ptc-core.module";

@NgModule({
  declarations: [AppComponent],
  imports     : [TodoAppModule, PtcCoreModule],
  bootstrap   : [AppComponent]
})

export class AppModule {
}
