import {Component, ViewEncapsulation} from "@angular/core";
import {Http, Headers, URLSearchParams} from "@angular/http";


@Component({
  selector     : 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls    : ['todos/todos.css'],
  template     : `       
    <ul>
      <li><a [routerLink]="['login']">login</a></li>
      <li><a [routerLink]="['todos','list']">list</a></li>
      <li><a [routerLink]="['todos','table']">table</a></li>
    </ul> 
                 
    <router-outlet></router-outlet>
    
    
  `,
})


export class AppComponent {

}












