import {Component, ViewEncapsulation} from "@angular/core";
import {TodoList} from "./providers/todo-list.provider";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector     : 'todo-app',
  template     : `
    <section class="todoapp">
    
      <todo-header>   
        <h1>{{ title }}</h1>   
        <todo-input></todo-input>
      </todo-header>
      
      <todo-main>
        <todo-toggle></todo-toggle>
        <todo-list></todo-list>
      </todo-main>
      
      <todo-footer>
        <todo-counter></todo-counter>  
       <button class="clear-completed">Clear completed</button>
      </todo-footer>
      
    </section>
  `
})

export class TodoAppComponent {

  private title: string;
  private model: TodoList;

  constructor(list: TodoList) {
    this.title = "todos";
    this.model = list;
  }
}
