import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {TodoAppModule} from "./todo-app/todo-app.module";
import {PtcCoreModule} from "./ptc-core/ptc-core.module";
import {LoginModule} from "./login/login.module";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";


@NgModule({
  declarations: [AppComponent],
  imports     : [
    TodoAppModule,
    PtcCoreModule,
    LoginModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap   : [AppComponent]
})

export class AppModule {
}
