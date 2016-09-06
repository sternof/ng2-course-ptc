import {Component} from "@angular/core";

@Component({
  selector: 'todo-footer',
  template: `
    <footer class="footer">       
       <ng-content></ng-content>    
    </footer>
   `
})

export class TodoFooterComponent {}