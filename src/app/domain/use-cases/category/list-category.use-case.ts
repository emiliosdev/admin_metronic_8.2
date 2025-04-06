import {Injectable} from "@angular/core";
import {BaseUseCase} from "@core/base-use-case";
import {Observable} from "rxjs";
import {CategoryRepository} from "@domain/repositories/category.repository";
import {  CategoryResponse} from "@domain/models/category.model";

@Injectable({
  providedIn: 'root',
})
export class ListCategoryUseCase implements BaseUseCase<CategoryResponse, any>{
  constructor(private repo:CategoryRepository) {
  }

  execute(params: any): Observable<CategoryResponse> {
       return this.repo.list(params)
    }
}
