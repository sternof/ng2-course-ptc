import {Component, Input} from "@angular/core";
import {Item} from "../todo-app.component";

@Component({
  selector: 'todo-item',
  template: `
    <li>
        <div class="view">
          <input class="toggle"
                 [checked]="item.done"
                 type="checkbox">

          <label>{{ item.title }}</label>

          <button class="destroy"></button>
        </div>

        <input class="edit">
      </li>
  `
})

export class TodoItemComponent {

  @Input()
  private item: Item;

}