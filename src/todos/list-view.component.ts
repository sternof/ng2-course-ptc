import {Component} from "@angular/core";
import {TodoList} from "../models/todo-list.provider";

@Component({
  selector: 'list-view',
  template: `    
    <section class="todoapp">
    
      <todos-hedaer [title]="title"></todos-hedaer>
      
      <todos-main>
          <todos-toggle></todos-toggle>          
          <todos-list [items]="model.items"></todos-list>
      </todos-main>
      <todos-footer>
        <counter [amount]="model.items | count:'done':true "></counter>
      </todos-footer>
    </section>
`
})

export class ListViewComponent {

  private title:string;
  private model:TodoList;

  constructor(model:TodoList) {
    this.title = "todos";
    this.model = model;
  }

}

