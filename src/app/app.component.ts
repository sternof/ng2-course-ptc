import {Component} from "@angular/core";
import {TodoList} from "../models/todo-list.provider";

@Component({
  selector   : 'app',
  template   : `   
    <login></login>
    <todos></todos>    
  `,
})


export class AppComponent {

  constructor(model: TodoList) {

  }

}