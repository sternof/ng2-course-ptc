import {Component} from "@angular/core";

@Component({
  selector: 'todo-input',
  template: `
  <input class="new-todo"
           placeholder="What needs to be done?"
           autofocus>
  `
})

export class TodoInputComponent {}