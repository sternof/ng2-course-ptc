import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'todo-app',
  styleUrls:['todo-app.css'],
  template: `
    <section class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </section>
  `
})

export class TodoAppComponent {}