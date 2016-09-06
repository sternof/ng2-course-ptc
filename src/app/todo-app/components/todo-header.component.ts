import {Component, Input} from "@angular/core";

@Component({
  selector: 'todo-header',
  template: `
    <header class="header">
      
      <h1>{{ title }}</h1>

      <todo-input (itemAdded)="log($event)"></todo-input>
      
    </header>
  `
})

export class TodoHeaderComponent {

  @Input()
  private title: string;


  log(event){
    console.log(event);
  }


}