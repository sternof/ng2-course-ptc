
import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'todos',
  encapsulation: ViewEncapsulation.None,
  styleUrls:['./todos.css'],
  template: `    
    <section class="todoapp">
      <todos-hedaer></todos-hedaer>
      <todos-main>
          <todos-toggle></todos-toggle>          
          <todos-list></todos-list>
      </todos-main>
      <todos-footer>
        <counter></counter>
      </todos-footer>
    </section>
`
})

export class TodosComponent {}