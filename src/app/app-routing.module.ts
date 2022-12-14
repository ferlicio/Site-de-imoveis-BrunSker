import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'imoveis',
    loadChildren: () => import('./imoveis/imoveis.module').then(m => m.ImoveisModule)
  },
  {
    path: 'imovel',
    loadChildren: () => import('./imoveis/imovel.module').then(m => m.ImovelModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'imoveis'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }