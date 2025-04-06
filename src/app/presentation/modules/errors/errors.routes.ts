import {   Routes } from "@angular/router";
import { ErrorsComponent } from "./errors.component";
import { Error404Component } from "@presentation/modules/errors/error404/error404.component";
import { Error500Component } from "@presentation/modules/errors/error500/error500.component";

export const routes:Routes = [
  {
    path: '',
    component: ErrorsComponent,
    children: [
      {
        path: '404',
        component: Error404Component,
      },
      {
        path: '500',
        component: Error500Component,
      },
      { path: '', redirectTo: '404', pathMatch: 'full' },
      { path: '**', redirectTo: '404', pathMatch: 'full' },
    ],
  },
]
