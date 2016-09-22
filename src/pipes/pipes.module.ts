
import {NgModule} from "@angular/core";
import {XJsonPipe} from "./x-json.pipe";
import {CounterPipe} from "./counter.pipe";

@NgModule({
  declarations: [XJsonPipe, CounterPipe],
  exports: [XJsonPipe, CounterPipe]
})


export class PipesModule {}