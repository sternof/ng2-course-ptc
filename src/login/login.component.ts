import {Component} from "@angular/core";

@Component({
  selector: 'login',
  styles: [`input {height: 30px; width: 120px}`],
  template: `
        <h2>Login</h2>
        
        <div>
          <input type="text" placeholder="username">
        </div>
        
        <div>
          <input type="password" placeholder="password">
        </div>
        
        <div>
          <button>Login</button>
        </div>
  `
})

export class LoginComponent {}