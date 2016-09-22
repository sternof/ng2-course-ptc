
import {Component, Input} from "@angular/core";

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
  private item: any;

  getClass(item){
    return { completed: item.done }
  }
}










