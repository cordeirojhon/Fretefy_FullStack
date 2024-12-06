import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})

// TODO: aplicar validacao

export class CadastroComponent implements OnInit {
  registerRegion: FormGroup;
  ngOnInit(): void {
    this.registerRegion = new FormGroup({
      name: new FormControl('', Validators.required),
      cities: new FormArray([this.createCity()])
    });
  }

  createCity(): FormGroup {
    return new FormGroup({
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required)
    });
  }

  get cities(): FormArray {
    return this.registerRegion.get('cities') as FormArray;
  }

  addCity(): void {
    console.log('add ', this.registerRegion.value);
    this.cities.push(this.createCity());
  }

  removeCity(index: number): void {
    this.cities.removeAt(index);
  }

  sendForm(): void {
    console.log(this.registerRegion.value);
  }

  cancelForm(): void {
    console.log('cancel ', this.registerRegion.value);
    // this.registerRegion.reset();
  }
}

