import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'todo-header',
  template: `
    <div class="header">
      <ng-content></ng-content>      
    </div>
  `
})

export class TodoHeaderComponent {


  constructor() {
    console.log("TodoHeaderComponent constructed");
  }
}