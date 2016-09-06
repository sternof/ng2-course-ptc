import {Component} from "@angular/core";

@Component({
  selector: 'todo-item',
  template: `
    <li>
        <div class="view">
          <input class="toggle"
                 type="checkbox">

          <label>Todo Tittle</label>

          <button class="destroy"></button>
        </div>

        <input class="edit">
      </li>
  `
})

export class TodoItemComponent {}