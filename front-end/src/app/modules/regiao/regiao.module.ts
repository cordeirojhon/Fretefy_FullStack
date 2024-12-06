import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegiaoComponent } from './regiao.component';
import { RegiaoRoutingModule } from './regiao.routing';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TableModule } from "../../components/table/table.module";
import { RouterModule } from '@angular/router';
import { CadastroModule } from './cadastro/cadastro.module';

@NgModule({
  imports: [
    CommonModule,
    RegiaoRoutingModule,

    MatIconModule,
    MatButtonModule,
    TableModule,
    RouterModule,
    CadastroModule
],
  declarations: [RegiaoComponent],
  exports: [RegiaoComponent]
})
export class RegiaoModule { }
