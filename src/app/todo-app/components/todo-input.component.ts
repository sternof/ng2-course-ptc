import {Component, EventEmitter, Output} from "@angular/core";
import {TodoList} from "../providers/todo-list.provider";

@Component({
  selector: 'todo-input',
  template: `
  <input class="new-todo"
         #input  
         (keydown.enter)="model.addItem(input.value)"         
         placeholder="What needs to be done?"         
         autofocus>                                                          
  `
})

export class TodoInputComponent {

  private model: TodoList;

  // constructor(private model: TodoList) {}
   constructor(_model: TodoList) {
     this.model = _model;
   }
}