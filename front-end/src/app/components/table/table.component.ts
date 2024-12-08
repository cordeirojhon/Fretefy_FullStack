import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableDataSource, TableItem } from './table-datasource';
import { RegionService } from 'src/app/services/regiao.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnInit {
  constructor(
    private regionService: RegionService
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TableItem>;
  dataSource: TableDataSource;

  displayedColumns = ['enabled', 'name', 'id'];

  ngOnInit() {
    this.dataSource = new TableDataSource();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator ? this.paginator : null;
    this.table.dataSource = this.dataSource;
  }

  toggleStatus(row: TableItem): void {

    this.regionService.updateRegion({...row, enabled: !row.enabled}, row.id);
    // TODO refresh nos dados da tabela adequadamente
    location.reload();

  }
}
