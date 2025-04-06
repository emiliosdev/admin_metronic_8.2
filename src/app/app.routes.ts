import { Routes } from '@angular/router';
import {authGuard} from "@core/guards/auth.guard";

export const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () =>  import('@presentation/modules/auth/auth.routes').then((m) => m.routes),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('@presentation/modules/errors/errors.routes').then((m) => m.routes),
  },
  {
    path: '',
     canActivate: [authGuard],
    loadChildren: () =>
      import('./presentation/layout/layout.routes').then((m) => m.routes),
  },
  { path: '**', redirectTo: 'error/404' },
];
