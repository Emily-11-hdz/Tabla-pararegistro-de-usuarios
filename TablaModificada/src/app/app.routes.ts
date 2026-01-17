import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'atabla-formulario',
    pathMatch: 'full',
  },
  {
    path: 'atabla-formulario',
    loadComponent: () => import('./pages/atabla-formulario/atabla-formulario.page').then( m => m.AtablaFormularioPage)
  },
];
