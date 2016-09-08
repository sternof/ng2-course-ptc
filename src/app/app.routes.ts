
import {Routes} from "@angular/router";
import {LoginFormComponent} from "./login/login-form.component";
import {TodoAppComponent} from "./todo-app/todo-app.component";
import {LoginFormAdminComponent} from "./login/login-form-admin.component";
import {LoginFormUserComponent} from "./login/login-form-user.component";
import {PtcAuthGuerd} from "./ptc-core/ptc-auth-guerd";

export const routes:Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
    children: [
      {path: '', redirectTo: 'user', pathMatch:'full'},
      {path: 'admin', component: LoginFormAdminComponent, data: { key: 1234 }},
      {path: 'user', component: LoginFormUserComponent},
    ]

  },

  {
    path: 'todos',
    component: TodoAppComponent,
    canActivate: [PtcAuthGuerd],
  }
];