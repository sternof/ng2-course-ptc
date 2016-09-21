
import {Component} from "@angular/core";

@Component({
  selector: 'todos-main',
  template: `
    <section class="main">
      <ng-content></ng-content>
    </section>
   `
})

export class TodosMainComponent {}