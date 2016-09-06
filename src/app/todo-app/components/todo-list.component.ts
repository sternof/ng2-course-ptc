import {Component} from "@angular/core";

@Component({
  selector: 'todo-list',
  template: `
    <ul class="todo-list">
      <todo-item></todo-item>
    </ul>
   `
})

export class TodoListComponent {}