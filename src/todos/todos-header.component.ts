import {Component, Input} from "@angular/core";

@Component({
  selector: 'todos-hedaer',
  template: `
    <header class="header">
    
    <h1>{{ title }}</h1>
    
    <input class="new-todo"
           type="text"
           placeholder="What needs to be done?"
           autofocus>
  </header>
 `
})

export class TodosHeaderComponent {

  @Input()
  private title:string;


}











