
import {Component, Input} from "@angular/core";
import {TodoList} from "../models/todo-list.provider";

@Component({
  selector: 'todos-list-item',
  template: `
    <li [ngClass]="getClass(item)">
        <div class="view">
        
          <input class="toggle"
                 [checked]="item.done"
                 type="checkbox">
                 
          <label>{{ item.title }}</label>
                            
          <button (click)="list.removeItem(item)" class="destroy"></button>

        </div>
        <input class="edit">

      </li>
  `
})

export class TodosListItemComponent {

  @Input()
  private item: any;
  private list: TodoList;

  constructor(list: TodoList) {
    this.list = list;
  }

  getClass(item){
    return { completed: item.done }
  }
}










