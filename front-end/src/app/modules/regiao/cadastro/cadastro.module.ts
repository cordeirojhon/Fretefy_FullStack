import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro.component';

@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CadastroComponent],
  exports: [CadastroComponent],

})
export class CadastroModule { }
