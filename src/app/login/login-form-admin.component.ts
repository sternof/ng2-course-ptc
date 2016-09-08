import {Component} from "@angular/core";

@Component({
  selector: 'login-form-admin',
  template: `
    <h2>For Admin</h2>
    <input type="text" placeholder="username">
    <br/>
    <input type="password" placeholder="password">
    <br/>
    <button>login</button>
`
})

export class LoginFormAdminComponent {
}