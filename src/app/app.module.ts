import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {TodoAppModule} from "./todo-app/todo-app.module";

@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule, TodoAppModule],
  bootstrap   : [AppComponent]
})

export class AppModule {}
