
import {Pipe} from "@angular/core";

@Pipe({
  name: 'counter',
  pure: false
})

export class CountPipe {

  transform(arr:any[], prop:string, value:any): number{
    return arr.filter ( item => item[prop]== value).length;
  }
}