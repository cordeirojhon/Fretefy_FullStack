import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  imports: [
    CommonModule,

    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: [TableComponent],
  exports: [TableComponent],
})
export class TableModule { }
