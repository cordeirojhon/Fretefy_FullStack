import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function uniqueValidator(key: string, property: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const array = control.value as Array<any>;
    const values = array.map((item) => {
      const value = item[key]?.[property];
      return value ? value.toLowerCase() : null;
    }).filter((value) => value !== null);
    const uniqueValues = new Set(values);

    return values.length !== uniqueValues.size ? { duplicate: true } : null;
  };
}

export const cityObjectValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const { city } = control.value;

  return city && city.id && city.state ? null : { cityInvalid: true };
};
