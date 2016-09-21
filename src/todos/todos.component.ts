import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector     : 'todos',
  encapsulation: ViewEncapsulation.None,
  styleUrls    : ['todos/todos.css'],
  template     : `    
    <section class="todoapp">
    
      <todos-hedaer [title]="title" 
                    (itemAdded)="addItem($event)" ></todos-hedaer>
      
      <todos-main>
          <todos-toggle></todos-toggle>          
          <todos-list [items]="items"></todos-list>
      </todos-main>
      <todos-footer>
        <counter></counter>
      </todos-footer>
    </section>
`
})

export class TodosComponent {

  private title:string;
  private items:Item[];

  constructor() {
    this.title = "TODOS";
    this.items = [];
  }

  addItem(text:string) {
    this.items.push(new Item(text))
  }

  removeItem(item:Item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

}

export class Item {
  public title:string;
  public done:boolean;

  constructor(title:string) {
    this.title = title;
    this.done  = false;
  }
}
