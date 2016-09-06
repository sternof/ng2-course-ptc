import {Component} from "@angular/core";

@Component({
  selector: 'todo-counter',
  inputs: ['amount'],
  template: `
    <span class="todo-count">
      <strong>{{amount}}</strong>
      item left
    </span>
`
})

export class TodoCounterComponent {}