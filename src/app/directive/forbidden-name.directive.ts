import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appForbiddenName]',
  providers: [{provide: NG_VALIDATORS,
              useExisting: ForbiddenValidatorDirective,
              multi: true}]
})
// Input parameter is the same with selector
// We can write the same, only one in html
// or    appForbiddenName
// forbiddenName='bob'
export class ForbiddenValidatorDirective implements Validator {
  @Input() appForbiddenName: string;

  validate(control: AbstractControl): {[key: string]: any} {
    console.log(this.appForbiddenName);
    // console.log(control);
    return this.appForbiddenName ? forbiddenNameValidator(new RegExp(this.appForbiddenName, 'i'))(control)
                              : null;
  }
}

// The corresponding ForbiddenValidatorDirective serves as a wrapper around the forbiddenNameValidator.
/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}
