import {Component, Input} from "@angular/core";
import {Item} from "./todos.component";

@Component({
  selector: 'todos-list',
  template: `
    <ul class="todo-list">      
      <todos-list-item *ngFor="let item of items"
                        [item]="item">                        
      </todos-list-item>
   </ul>
  `
})

export class TodosListComponent {

  @Input()
  private items: Item[];

}