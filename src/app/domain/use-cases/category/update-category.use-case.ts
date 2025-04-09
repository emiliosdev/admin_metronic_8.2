import {Injectable} from "@angular/core";
import {BaseUseCase} from "@core/base-use-case";
import {ApiResponse} from "@core/api-response";
import {Observable} from "rxjs";
import {CategoryRepository} from "@domain/repositories/category.repository";
import {CategoryData} from "@domain/models/category.model";

@Injectable({
  providedIn: 'root',
})
export class UpdateCategoryUseCase implements BaseUseCase<ApiResponse, CategoryData>{
  constructor(private repo:CategoryRepository) {
  }

  execute(params: CategoryData): Observable<ApiResponse<unknown>> {
       return this.repo.update(params)
    }



}
