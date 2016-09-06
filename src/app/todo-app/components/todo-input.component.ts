import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'todo-input',
  template: `
  <input class="new-todo"
         #input  
         (keydown.enter)="itemAdded.emit(input.value)"         
         placeholder="What needs to be done?"         
         autofocus>                                                          
  `
})

export class TodoInputComponent {

  @Output()
  private itemAdded: EventEmitter;

  constructor() {
    this.itemAdded = new EventEmitter();
  }



}