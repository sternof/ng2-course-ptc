import {Component} from "@angular/core";

@Component({
  selector: 'todo-footer',
  template: `
    <footer class="footer">
       
       <todo-counter></todo-counter>
    
       <button class="clear-completed">Clear completed</button>
    
  </footer>

   `
})

export class TodoFooterComponent {}