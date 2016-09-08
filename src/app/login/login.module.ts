import {NgModule} from "@angular/core";
import {LoginFormComponent} from "./login-form.component";
import {RouterModule} from "@angular/router";
import {LoginFormAdminComponent} from "./login-form-admin.component";
import {LoginFormUserComponent} from "./login-form-user.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

//todo: check
// import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginFormAdminComponent,
    LoginFormUserComponent
  ],
  imports: [RouterModule, FormsModule, BrowserModule],
  exports     : [LoginFormComponent,LoginFormAdminComponent, LoginFormUserComponent]
})

export class LoginModule {

}