import { FormGroup, Validators, FormControl } from '@angular/forms';

export class ValidatorMilo {

  static validate(control: FormControl) {
    const value = control.value;
    if (value.match(/^123/) || value === '') {
        return null;
    }else {
        return {invalid: true};
    }
  }

}
