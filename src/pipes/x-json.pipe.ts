
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'xjson'
})

export class XJsonPipe implements PipeTransform{

  transform(value:any, ...args):any {
    return JSON.stringify(value);
  }
}