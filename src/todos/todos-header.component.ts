import {Component, Input} from "@angular/core";
import {TodoList} from "../models/todo-list.provider";

@Component({
  selector: 'todos-hedaer',
  template: `
    <header class="header">
    
    <h1>{{ title }} </h1>
   

    <input class="new-todo"
           #input
           type="text"
           (keyup.enter)="list.addItem(input.value)"
           placeholder="What needs to be done?"
           autofocus>
  </header>
 `
})

export class TodosHeaderComponent {

  @Input()
  private title:string;

  private list:TodoList;

  constructor(list:TodoList) {
    this.list = list;
  }

}











