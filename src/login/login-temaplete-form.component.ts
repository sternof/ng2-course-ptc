import {Component} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {CustomValidators} from "./custom-validators";

@Component({
  selector: 'login',
  styles  : [`
      input {height: 30px; width: 120px}
      input.ng-invalid { border-bottom: 2px solid red }
      `
  ],
  template: `
        <h2>Login</h2>
        
        <form #loginForm="ngForm" (ngSubmit)="login()">
        
          <div>
            <input type="text"   
                   name= "useraname" 
                   [(ngModel)]="user.username" 
                   #usernameBox="ngModel"     
                   placeholder="username"
                   required
                   minlength="3"
                   
                   >
          </div>
                    
                                 
          <div>
            <input type="password" 
                   name = "password"
                   [(ngModel)]="user.password"
                   placeholder="password">
          </div>
          
          <div>
            <button (click)="log(loginForm)">Login</button>
          </div>
        </form>
  `
})

export class LoginComponent {

  private user = new User('', '');

  login(){

  }
}

class User {
  username: string;
  password: string;

  constructor(username:string, password:string) {
    this.username = username;
    this.password = password;
  }
}













