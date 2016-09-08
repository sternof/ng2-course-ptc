import {NgModule} from "@angular/core";
import {LoginFormComponent} from "./login-form.component";
import {RouterModule} from "@angular/router";
import {LoginFormAdminComponent} from "./login-form-admin.component";
import {LoginFormUserComponent} from "./login-form-user.component";

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginFormAdminComponent,
    LoginFormUserComponent
  ],
  imports: [RouterModule],
  exports     : [LoginFormComponent,LoginFormAdminComponent, LoginFormUserComponent]
})

export class LoginModule {

}