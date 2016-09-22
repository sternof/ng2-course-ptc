
import {Validator, AbstractControl} from "@angular/forms";


export class CustomValidators {

  static noSpace(control:AbstractControl) {

    if(control.value !== 'nir') {
      return { noNir: true }
    }

    return null;
  }



}