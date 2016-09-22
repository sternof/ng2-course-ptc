import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
  name: 'count',
  pure: false
})

export class CounterPipe implements PipeTransform {

  transform(arr:any[], key:string, value:any):number {
    return arr.filter( item => item[key] === value).length;
  }
}