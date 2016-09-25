import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {TodosModule} from "../todos/todos.module";
import {LoginModule} from "../login/login.module";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [AppComponent],
  imports     : [
    BrowserModule,
    LoginModule,
    TodosModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap   : [AppComponent]
})

export class AppModule {
}
