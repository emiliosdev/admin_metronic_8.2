import {Injectable} from "@angular/core";
import {BaseUseCase} from "@core/base-use-case";
import {Observable} from "rxjs";
import {CategoryRepository} from "@domain/repositories/category.repository";

@Injectable({
  providedIn: 'root',
})
export class GetIdCategoryUseCase implements BaseUseCase<any, number>{
  constructor(private repo:CategoryRepository) {
  }

  execute(id: number): Observable<any> {
        return this.repo.getId(id)
    }


}
