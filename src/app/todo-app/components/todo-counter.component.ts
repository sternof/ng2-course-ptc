import {Component} from "@angular/core";
import {TodoList} from "../providers/todo-list.provider";

@Component({
  selector: 'todo-counter',
  inputs: ['amount'],
  template: `
    <span class="todo-count">
      <!--<strong>{{ model.items |   counter:'done':false }}</strong>-->
      item left
    </span>
`
})

export class TodoCounterComponent {

  private model: TodoList;

  constructor(model:TodoList) {
    this.model = model;
  }

}