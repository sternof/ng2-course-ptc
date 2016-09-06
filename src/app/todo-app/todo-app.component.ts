import {Component} from "@angular/core";

@Component({
  selector: 'todo-app',
  template: `
    <todo-header></todo-header>
    <todo-main></todo-main>
    <todo-footer></todo-footer>
  `
})

export class TodoAppComponent {}