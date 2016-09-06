import {Component} from "@angular/core";

@Component({
  selector: 'todo-main',
  template: `
    <section class="main">
      <ng-content></ng-content>      
    </section>
   `
})

export class TodoMainComponent {
}