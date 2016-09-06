import {Component, Input} from "@angular/core";
import {Item} from "../todo-app.component";

@Component({
  selector: 'todo-list',
  template: `
    <ul class="todo-list">
      <todo-item *ngFor="let item of items"></todo-item>
    </ul>
   `
})

export class TodoListComponent {

  @Input()
  private items: Item[];
}