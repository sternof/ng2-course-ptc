import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'login-form-admin',
  styles  : [`
  .ng-touched {background-color: yellow} 
  .ng-dirty{background-color: red } 
  .ng-invalid{ background-color: pink}
  `],
  template: `
    <h2>Form User</h2>
    
    <form #loginForm="ngForm" (ngSubmit)="login(loginForm)">
    
    <input type="text"
           ngModel
           name="username"            
           placeholder="username"                       
           minlength="3">
                      
        
    <input type="password"
           ngModel
           name="password"
           placeholder="password"
           required>
        
    <button type="submit">login</button>
    </form>
`
})

export class LoginFormUserComponent {

  private user = {username: '', password: ''};

  constructor(route:ActivatedRoute) {
  }

  login(loginForm) {

  }
}