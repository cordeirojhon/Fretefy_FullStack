import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RegiaoService } from '../../../services/regiao.service';

import { uniqueValidator, cityObjectValidator } from '../../../validators/cities.validator';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent implements OnInit {
  constructor(private regiaoService: RegiaoService) { }

  registerRegion: FormGroup;
  allCities: Observable<object[]>;

  ngOnInit(): void {
    this.registerRegion = new FormGroup({
      name: new FormControl('', Validators.required),
      cities: new FormArray([this.createCity()], uniqueValidator('city', 'city'))
    });

    this.allCities = this.cities.controls[0].get('city').valueChanges.pipe(
      startWith(''),
      map(value => this.regiaoService.searchCities(value))
    )
  }

  createCity(): FormGroup {
    return new FormGroup({
      city: new FormControl('', Validators.required)
    }, { validators: cityObjectValidator });
  }
  displayCity(city: any): string {
    return city ? city.city : '';
  }

  get cities(): FormArray {
    return this.registerRegion.get('cities') as FormArray;
  }

  addCity(): void {
    this.cities.push(this.createCity());
  }

  removeCity(index: number): void {
    this.cities.removeAt(index);
  }

  cancelForm(): void {
    console.log('cancel ', this.registerRegion.value);
    this.registerRegion.reset();
  }

  sendForm(): void {
    if (this.registerRegion.valid) {
      this.regiaoService.postRegion(this.registerRegion.value);
    }
  }
}


