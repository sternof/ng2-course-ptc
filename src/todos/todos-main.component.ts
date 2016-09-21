
import {Component} from "@angular/core";

@Component({
  selector: 'todos-main',
  template: `
    <todos-toggle></todos-toggle>
    <todos-list></todos-list>
   `
})

export class TodosMainComponent {}