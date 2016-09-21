import {Component} from "@angular/core";

@Component({
  selector: 'todos-list',
  template: `
    <ul class="todo-list">
      <todos-list-item></todos-list-item>
   </ul>
  `
})

export class TodosListComponent {
}