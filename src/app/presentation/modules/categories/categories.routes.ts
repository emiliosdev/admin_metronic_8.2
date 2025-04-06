import {Routes} from "@angular/router";
import {CategoriesComponent} from "@presentation/modules/categories/categories.component";
import {CreateCategorieComponent} from "@presentation/modules/categories/create-categorie/create-categorie.component";
import {EditCategorieComponent} from "@presentation/modules/categories/edit-categorie/edit-categorie.component";
import {ListCategorieComponent} from "@presentation/modules/categories/list-categorie/list-categorie.component";

export const routes:Routes = [
  {
    path: '',
    component: CategoriesComponent,
    children: [
      {
        path: 'register',
        component: CreateCategorieComponent
      },
      {
        path: 'edit/:id',
        component: EditCategorieComponent,
      },
      {
        path: 'list',
        component: ListCategorieComponent,
      }
    ]
  }
]
