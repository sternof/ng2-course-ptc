
import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'todos',
  encapsulation: ViewEncapsulation.None,
  styleUrls:['./todos.css'],
  template: `    
    <section class="todoapp">
      <todos-hedaer></todos-hedaer>
      <todos-main></todos-main>
      <todos-footer></todos-footer>
    </section>
`
})

export class TodosComponent {}