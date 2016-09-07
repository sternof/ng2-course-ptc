import {Component} from "@angular/core";
import {ListStorage} from "../../ptc-core/storage";

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