
import {Component} from "@angular/core";

@Component({
  selector: 'todos-footer',
  template: `
<footer class="footer">
    <ng-content></ng-content>    
    <button class="clear-completed">Clear completed</button>
  </footer>
  
`
})

export class TodosFooterComponent {}