import {LoginComponent} from "../login/login.component";
import {TodosComponent} from "../todos/todos.component";
import {Routes} from "@angular/router";
import {ListViewComponent} from "../todos/list-view.component";
import {TableViewComponent} from "../todos/table-view.component";
import {IsUser} from "./app.gurdes";


export const routes:Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path       : 'todos',
    component  : TodosComponent,
    canActivate: [IsUser],
    canDeactivate: [],
    children   : [
      {path: 'list', component: ListViewComponent},
      {path: 'table', component: TableViewComponent},
    ]
  }
];