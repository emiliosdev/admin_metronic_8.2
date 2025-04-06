import {CategoryConfigResponse} from "@domain/models/category.model";

export class GetConfigCategoryMapper {
  static fromJson(response: any): CategoryConfigResponse {
    console.log(response);
    return {
      categoriesFirst: response.categoriesFirst || [],
      categoriesSecond: response.categoriesSecond || []

    }
  }
}
