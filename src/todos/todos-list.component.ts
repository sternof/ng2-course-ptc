import {Component, Input, ChangeDetectionStrategy} from "@angular/core";


@Component({
  selector: 'todos-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  private items: any[];

}