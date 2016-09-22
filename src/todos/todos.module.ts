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
import {PipesModule} from "../pipes/pipes.module";
import {ModelsModule} from "../models/models.module";
import {ListViewComponent} from "./list-view.component";
import {TableViewComponent} from "./table-view.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    TodosComponent,

    ListViewComponent,
    TableViewComponent,

    TodosMainComponent,
    TodosHeaderComponent,
    TodosFooterComponent,
    TodosToggleComponent,
    TodosListComponent,
    TodosListItemComponent
  ],
  imports     : [
    BrowserModule,
    SharedComponentsModule,
    PipesModule,
    ModelsModule,
    RouterModule
  ],
  exports     : [
    TodosComponent,
    ListViewComponent,
    TableViewComponent,
  ]
})


export class TodosModule {
}