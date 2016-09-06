import {Component} from "@angular/core";

@Component({
  selector: 'todo-header',
  template: `
    <header class="header">
   
      <h1>todos</h1>

      <todo-input></todo-input>
    </header>
  `
})

export class TodoHeaderComponent {}