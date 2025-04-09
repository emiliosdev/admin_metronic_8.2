import {inject, Injectable} from "@angular/core";
import {Config} from "@core/config/config";
import {CategoryRepository} from "@domain/repositories/category.repository";
import { ApiResponse } from "@core/api-response";
import { Observable } from "rxjs";
import { CategoryData, CategoryConfigResponse, CategoryResponse } from "@domain/models/category.model";
import {ListCategoryMapper} from "@data/category/list-category.mapper";
import {map} from "rxjs/operators";
import {GetConfigCategoryMapper} from "@data/category/get-config-category.mapper";
import {CreateCategoryMapper} from "@data/category/create-category.mapper";
import {HttpClient} from "@angular/common/http";
import {GetIdCategoryMapper} from "@data/category/get-id-category.mapper";

@Injectable({
  providedIn: 'root'
})
export class CategoryRepositoryImpl implements CategoryRepository {
  update(params: CategoryData): Observable<ApiResponse> {
    let data = CreateCategoryMapper.toJson(params);
    return this.http.patch<ApiResponse>(`${this.url}/${params.id}`, data)
  }
  getId(id: number): Observable<any> {
    return this.http.get<ApiResponse>(`${this.url}/${id}` ).pipe(
      map(response=>GetIdCategoryMapper.fromJson(response))
    )
  }


  list(params: any): Observable<CategoryResponse> {
    const json = ListCategoryMapper.toJson(params);
    return this.http.get<ApiResponse>(`${this.url}`, {
      params: json
    } )
      .pipe(
        map(response=>ListCategoryMapper.fromJson(response))
      )
  }
  getConfig( ): Observable<CategoryConfigResponse> {
      return this.http.get<ApiResponse>(`${this.url}/config` )
        .pipe(
          map(response=>GetConfigCategoryMapper.fromJson(response.payload))
        )
  }
  create(params: any): Observable<ApiResponse> {
      let data = CreateCategoryMapper.toJson(params);
      return this.http.post<ApiResponse>(`${this.url}`, data)
  }
  private url =`${ Config.URL_SERVICIOS}/categories`
  private http = inject(HttpClient);


}
