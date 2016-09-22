import {LoginComponent} from "../login/login.component";
import {TodosComponent} from "../todos/todos.component";
import {Routes} from "@angular/router";
import {ListViewComponent} from "../todos/list-view.component";
import {TableViewComponent} from "../todos/table-view.component";

export const routes:Routes = [
  {path: 'login', component: LoginComponent},
  {
    path     : 'todos',
    component: TodosComponent,
    children : [
      {path: 'list', component: ListViewComponent},
      {path: 'table', component: TableViewComponent},
    ]
  }
];