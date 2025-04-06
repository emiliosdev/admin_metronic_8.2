import {Injectable} from "@angular/core";
import {BaseUseCase} from "@core/base-use-case";
import {Observable} from "rxjs";
import {CategoryRepository} from "@domain/repositories/category.repository";
import {CategoryConfigResponse} from "@domain/models/category.model";

@Injectable({
  providedIn: 'root',
})
export class GetConfigCategoryUseCase implements BaseUseCase<CategoryConfigResponse, any>{
  constructor(private repo:CategoryRepository) {
  }

  execute( ): Observable<CategoryConfigResponse> {
       return this.repo.getConfig()
    }




}
