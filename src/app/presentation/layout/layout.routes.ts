import { Routes } from "@angular/router";
import {LayoutComponent} from "./layout.component";
import {moduleRoutes} from "@presentation/modules/modules.routes";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: moduleRoutes,
  },
]
