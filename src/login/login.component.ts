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
        
        <form [formGroup]="loginForm" (ngSubmit)="submit()">
        
          <div>
            <input type="text"
                   formControlName="username"
                   placeholder="username">
          </div>
                                 
          <div>
            <input type="password"
                   formControlName="password"
                   placeholder="password">
          </div>
          
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
  `
})

export class LoginComponent {

  private loginForm:FormGroup;
  private username = new FormControl('', Validators.compose([
    Validators.required,
    CustomValidators.noSpace
  ]));

  constructor() {
    this.loginForm = new FormGroup({
      username: this.username,
      password: new FormControl(''),
    });

  }

  submit() {
    console.log(this.username);
  }

}