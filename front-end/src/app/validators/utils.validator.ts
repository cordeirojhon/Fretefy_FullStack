import { AbstractControl, FormArray, ValidationErrors, ValidatorFn } from "@angular/forms";
import { RegionService } from '../services/regiao.service';

export function cityValidator(key: string, param: string | number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    // se nao tiver id, invalido
    if (!control.value[param]) {
      return { invalidValue: true };
    }

    const parentControl = control.parent.parent as FormArray;

    // verifica se ja tem um item com o mesmo id
    // TODO: corrigir problema ao validar caso de edicao
    const isDuplicate = parentControl.controls.some((group: AbstractControl) => control.value[param] === group.value[key][param]);

    if (isDuplicate) {
      return { duplicate: true };
    }

    return null
  };
}

export function verifyRegionName(data: { id: string, enabled: boolean, name: string, cities: { id: number, city: string, state: string }[] }): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    const lowerCaseValue = control.value.toLowerCase();
    // impede que o item tenha mesmo nome que outro ja cadastrado
    // se for o mesmo id, nao impede
    const isDuplicate = RegionService.getRegions().some(region =>
      lowerCaseValue === region.name.toLowerCase() && data?.id !== region.id
    );

    return isDuplicate ? { duplicate: true } : null;
  };
}
