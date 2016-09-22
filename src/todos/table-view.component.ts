import {Component} from "@angular/core";
import {TodoList} from "../models/todo-list.provider";

@Component({
  selector: 'table-view',
  template: `
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>done</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of list.items">
            <td>{{ item.title }}</td>
            <td>{{ item.done }}</td>
          </tr>
        </tbody>        
      </table>
    `
})


export class TableViewComponent {
  private list:TodoList;

  constructor(list:TodoList) {
    this.list = list;
  }

}