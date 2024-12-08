import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { RegionService } from '../../services/regiao.service';

export interface TableItem {
  id: string;
  name: string;
  enabled: boolean;
}

export class TableDataSource extends DataSource<TableItem> {

  // Obtem dados do service
  data: TableItem[] = RegionService.getRegions();

  paginator: MatPaginator | null;
  sort: MatSort;

  constructor() {
    super();
  }

  connect(): Observable<TableItem[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator ? this.paginator.page : observableOf({}),
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  disconnect() {}

  private getPagedData(data: TableItem[]) {
    const startIndex = this.paginator ? this.paginator.pageIndex * this.paginator.pageSize : 0;
    return data.splice(startIndex, this.paginator ? this.paginator.pageSize : data.length);
  }

  private getSortedData(data: TableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'enabled': return compare(+a.enabled, +b.enabled, isAsc);
        default: return 0;
      }
    });
  }
}

// Ordenacao simples
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

