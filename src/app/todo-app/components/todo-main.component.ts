import {Component, Input} from "@angular/core";
import {Item} from "../todo-app.component";

@Component({
  selector: 'todo-main',
  template: `
    <section class="main">
      <todo-toggle></todo-toggle>
      <todo-list [items]="items"></todo-list>
    </section>
   `
})

export class TodoMainComponent {

  @Input()
  private items: Item[];

}