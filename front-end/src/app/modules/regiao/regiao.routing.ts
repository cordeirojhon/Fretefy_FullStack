import { RouterModule, Routes } from '@angular/router';
import { RegiaoComponent } from './regiao.component';

const routes: Routes = [
  {
    path: '',
    component: RegiaoComponent
  },
  {
    path: 'nova-regiao',
    component: RegiaoComponent
  },
  {
    path: ':id',
    component: RegiaoComponent
  },
];

export const  RegiaoRoutingModule = RouterModule.forChild(routes);
