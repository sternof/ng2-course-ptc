import {Component, Input} from "@angular/core";

@Component({
  selector: 'todo-header',
  template: `
    <header class="header">
   
      <h1>{{ title }}</h1>

      <todo-input></todo-input>
    </header>
  `
})

export class TodoHeaderComponent {

  @Input()
  private title: string;



}