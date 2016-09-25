import {Component} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {CustomValidators} from "./custom-validators";
import {store, ACTIONS} from "../app/app.store";
import {Router} from "@angular/router";


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
                            
        <pre>{{ username.errors | json }}</pre>                                 
                                 
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
  private router:Router;

  private loginForm:FormGroup;
  private username = new FormControl('', Validators.compose([
    Validators.required,
    CustomValidators.noSpace
  ]));

  constructor(router:Router) {

    this.router = router;

    this.loginForm = new FormGroup({
      username: this.username,
      password: new FormControl(''),
    });
  }

  ngOnInit() {
    store.subscribe(() => {
      if (store.getState().user) {
        this.router.navigate(['todos/list']);
      }
    })
  }

  submit() {
    store.dispatch({
      type   : ACTIONS.LOGIN,
      payload: this.loginForm.value
    })
  }

}