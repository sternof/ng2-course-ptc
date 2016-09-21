
import {Component} from "@angular/core";

@Component({
  selector: 'todos-main',
  template: `
    <section class="main">
      <todos-toggle></todos-toggle>
      <todos-list></todos-list>
    </section>
   `
})

export class TodosMainComponent {}