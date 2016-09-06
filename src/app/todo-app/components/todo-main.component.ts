import {Component} from "@angular/core";

@Component({
  selector: 'todo-main',
  template: `
    <section class="main">
      <todo-toggle></todo-toggle>
      <todo-list></todo-list>
    </section>
   `
})

export class TodoMainComponent {}