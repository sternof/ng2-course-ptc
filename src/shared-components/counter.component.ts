import {Component, Input} from "@angular/core";

@Component({
  selector: 'counter',
  template: `
    <span class="todo-count">
      <strong>{{ amount }}</strong>
      item left 
    </span>
  `
})

export class CounterComponent {

  @Input()
  private amount: number;

}