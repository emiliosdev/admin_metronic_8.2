import { Routes } from '@angular/router';
export  const moduleRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('@presentation/pages/dashboard/dashboard.routes').then((m) => m.routes),
  },
  {
    path: 'categories',
    loadChildren: () => import('@presentation/modules/categories/categories.routes').then((m) => m.routes),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

