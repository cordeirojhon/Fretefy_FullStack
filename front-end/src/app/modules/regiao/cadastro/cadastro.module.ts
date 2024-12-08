import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { CadastroComponent } from './cadastro.component';


@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [CadastroComponent],
  exports: [CadastroComponent],

})
export class CadastroModule { }
