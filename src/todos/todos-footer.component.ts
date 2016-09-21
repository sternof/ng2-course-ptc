
import {Component} from "@angular/core";

@Component({
  selector: 'todos-footer',
  template: `
<footer class="footer">
    <counter></counter>    
    <button class="clear-completed">Clear completed</button>
  </footer>
  
`
})

export class TodosFooterComponent {}