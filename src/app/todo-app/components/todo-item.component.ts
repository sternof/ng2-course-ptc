import {Component, Input} from "@angular/core";
import {TodoList} from "../providers/todo-list.provider";
import {Item} from "../providers/item.model";

@Component({
  selector: 'todo-item',
  template: `
    <li [ngClass]="{completed: item.done}">
        <div class="view">
          <input class="toggle"
                 [checked]="item.done"
                 (change)="model.toggleDone(item)"
                 type="checkbox">

          <label>{{ item.title }}</label>

          <button (click)="model.removeItem(item)" class="destroy"></button>
                    
        </div>

        <input class="edit">
      </li>
  `
})

export class TodoItemComponent {

  @Input()
  private item: Item;

  private model:TodoList;

  constructor(_model:TodoList) {
    this.model = _model
  }

}