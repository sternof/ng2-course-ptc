import {NgModule} from "@angular/core";
import {TodosComponent} from "./todos.component";
import {TodosMainComponent} from "./todos-main.component";
import {TodosHeaderComponent} from "./todos-header.component";
import {TodosFooterComponent} from "./todos-footer.component";
import {TodosToggleComponent} from "./todos-toggle.component";
import {TodosListComponent} from "./todos-list.component";
import {TodosListItemComponent} from "./todos-list-item.component";
import {SharedComponentsModule} from "../shared-components/shared-components.module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    TodosComponent,
    TodosMainComponent,
    TodosHeaderComponent,
    TodosFooterComponent,
    TodosToggleComponent,
    TodosListComponent,
    TodosListItemComponent
  ],
  imports     : [BrowserModule, SharedComponentsModule],
  exports     : [TodosComponent]
})


export class TodosModule {
}