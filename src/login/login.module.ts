import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [LoginComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  exports: [
      LoginComponent,
      BrowserModule
  ]
})

export class LoginModule {}