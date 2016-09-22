import {Component, ViewEncapsulation} from "@angular/core";
import {TodoList} from "../models/todo-list.provider";

@Component({
  selector   : 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls    : ['todos/todos.css'],
  template   : `       
    <header><h1>HEADER</h1></header>
      
    <router-outlet></router-outlet>
    
    <footer><h3>FOTTER</h3></footer>
  `,
})


export class AppComponent {

  constructor(model: TodoList) {

  }

}