import { CategoryResponse} from "@domain/models/category.model";
import {ApiResponse} from "@core/api-response";

export class ListCategoryMapper {
  static toJson(params:any){
    return {
      page: params.page,
      limit: params.pageSize,
      search: params.search,
    }
  }
  static fromJson(response: ApiResponse): CategoryResponse {
    console.log(response)

    const {data, total} = response.payload as any;

    const categories = data.map((item:any, index: number)=>{
      return {
        ...item,
        index: index+1
      }
    })

    return {
      data : categories,
      totalRecords: total
    }
  }
}
