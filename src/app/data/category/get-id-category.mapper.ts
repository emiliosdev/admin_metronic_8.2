
import {ApiResponse} from "@core/api-response";
import {CategoryData} from "@domain/models/category.model";
import {getValidId, isValidField} from "@domain/utils/validator";

export class GetIdCategoryMapper {

  static fromJson(response: ApiResponse): CategoryData {
     console.log(response);
     const {categorieSecondId, categorieThirdId,icon, ...rest} = response.payload as any;
     const result = {
       ...rest,
       icon: isValidField(icon),
       categorieSecondId: getValidId(Number(categorieSecondId)),
       categorieThirdId: getValidId(Number(categorieThirdId)),
     }
     return result
  }
}
