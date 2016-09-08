
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from "@angular/router";

export class PtcAuthGuerd implements CanActivate {

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    console.log(route);
    console.log(state);
    return false;
  }



}