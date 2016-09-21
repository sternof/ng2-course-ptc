import {NgModule} from "@angular/core";
import {TodosComponent} from "./todos.component";
import {TodosMainComponent} from "./todos-main.component";
import {TodosHeaderComponent} from "./todos-header.component";
import {TodosFooterComponent} from "./todos-footer.component";

@NgModule({
  declarations: [
    TodosComponent,
    TodosMainComponent,
    TodosHeaderComponent,
    TodosFooterComponent
  ],
  exports     : [TodosComponent]
})


export class TodosModule {
}