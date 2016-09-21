import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {TodosModule} from "../todos/todos.module";


@NgModule({
  declarations: [AppComponent],
  imports     : [
      BrowserModule,
      TodosModule
  ],
  bootstrap   : [AppComponent]
})

export class AppModule {}
