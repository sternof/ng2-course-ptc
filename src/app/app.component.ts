import {Component} from "@angular/core";

@Component({
  selector   : 'app',
  template: `<h1>{{ today | date:'short' }}</h1>`,
})


export class AppComponent {

private today = new Date();



}