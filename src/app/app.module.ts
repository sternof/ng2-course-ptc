import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {TodosModule} from "../todos/todos.module";
import {LoginModule} from "../login/login.module";


@NgModule({
  declarations: [AppComponent],
  imports     : [
    BrowserModule,
    LoginModule,
    TodosModule
  ],
  bootstrap   : [AppComponent]
})

export class AppModule {
}
