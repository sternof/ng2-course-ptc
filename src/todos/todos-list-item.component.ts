
import {Component, Input} from "@angular/core";
import {Item} from "./todos.component";

@Component({
  selector: 'todos-list-item',
  template: `
    <li [ngClass]="getClass(item)">
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

export class TodosListItemComponent {

  @Input()
  private item: Item;

  getClass(item){
    return { completed: item.done }
  }
}










