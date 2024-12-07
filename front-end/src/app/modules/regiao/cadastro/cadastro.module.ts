import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { CadastroComponent } from './cadastro.component';


@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  declarations: [CadastroComponent],
  exports: [CadastroComponent],

})
export class CadastroModule { }
