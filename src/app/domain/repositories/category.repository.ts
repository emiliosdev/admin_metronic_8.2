import {Observable} from "rxjs";
import {ApiResponse} from "@core/api-response";
import {CategoryConfigResponse, CategoryData, CategoryResponse} from "@domain/models/category.model";

export abstract class CategoryRepository {
  abstract create(params:CategoryData):Observable<ApiResponse>;
  abstract update(params:CategoryData):Observable<ApiResponse>;
  abstract getConfig():Observable<CategoryConfigResponse>;
  abstract list(params:any):Observable<CategoryResponse>;
  abstract getId(id: number):Observable<CategoryData>;
}
