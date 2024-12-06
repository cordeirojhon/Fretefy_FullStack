import { RouterModule, Routes } from '@angular/router';
import { RegiaoComponent } from './regiao.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: RegiaoComponent
  },
  {
    path: 'nova-regiao',
    component: CadastroComponent
  },
  {
    path: ':id',
    component: CadastroComponent
  },
];

export const  RegiaoRoutingModule = RouterModule.forChild(routes);
