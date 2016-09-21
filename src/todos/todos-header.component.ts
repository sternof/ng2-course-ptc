import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'todos-hedaer',
  template: `
    <header class="header">
    
    <h1>{{ title }}</h1>
    <div></div>
    
    <input class="new-todo"
           #input
           type="text"
           (keyup.enter)="itemAdded.emit(input.value)"
           placeholder="What needs to be done?"
           autofocus>
  </header>
 `
})

export class TodosHeaderComponent {

  @Input()
  private title:string;

  @Output()
  private itemAdded: EventEmitter<string>;

  constructor() {
    this.itemAdded = new EventEmitter<string>();
  }

}











