import {Component} from "@angular/core";

@Component({
  selector: 'todo-main',
  template: `
    <todo-toggle></todo-toggle>
    <todo-list></todo-list>
  `
})

export class TodoMainComponent {}