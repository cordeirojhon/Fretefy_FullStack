import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RegionService } from '../../../services/regiao.service';

import { cityValidator, verifyRegionName } from '../../../validators/utils.validator';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent implements OnInit {
  constructor(
    private regionService: RegionService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  registerRegion: FormGroup;
  allCities: Observable<object[]>;
  id: string | null;

  ngOnInit(): void {
    const formData = this.route.paramMap.pipe(
      map(params => {
        this.id = params.get('id');
        if (this.id) {
          return this.regionService.getRegionById(this.id);
        }
        return {
          id: '',
          enabled: true,
          name: '',
          cities: []
        };
      })
    );

    formData.subscribe(data => {
      this.registerRegion = new FormGroup({
        name: new FormControl(data.name, [Validators.required, verifyRegionName(data)]),
        cities: new FormArray(data.cities.length ? data.cities.map(() => this.createCity()) : [this.createCity()]),
        enabled: new FormControl(data.enabled),
        id: new FormControl(data.id)
      });

      this.allCities = this.cities.controls[0].get('city').valueChanges.pipe(
        startWith(''),
        map(value => this.regionService.searchCities(value))
      )

      if (data.cities.length) {
        const citiesArray = [];
        data.cities.forEach(city => {
          citiesArray.push(city)
        });
        this.cities.patchValue(citiesArray);
      }
    });
  }
  createCity(): FormGroup {
    return new FormGroup({
      city: new FormControl('', [Validators.required, cityValidator('city', 'id')])
    });
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
    this.registerRegion.reset();
    this.router.navigate(['/regiao']);
  }

  sendForm(): void {
    if (this.registerRegion.valid) {
      if (this.id) {
        this.regionService.updateRegion(this.registerRegion.value, this.id);
        this.registerRegion.reset();
        alert('Região atualizada com sucesso!');
      } else {
        this.regionService.postRegion(this.registerRegion.value);
        this.registerRegion.reset();
        alert('Região cadastrada com sucesso!');
      }
      this.router.navigate(['/regiao']);
    }
  }
}


