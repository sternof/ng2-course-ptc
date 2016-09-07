import {Component} from "@angular/core";
import {TodoList} from "../providers/todo-list.provider";

@Component({
  selector: 'todo-list',
  template: `
    <ul class="todo-list">
      <todo-item *ngFor="let item of model.items" 
                 [item]="item">                 
      </todo-item>
    </ul>
   `
})

export class TodoListComponent {

  private model:TodoList;

  constructor(_model:TodoList) {
    this.model = _model;
  }

}