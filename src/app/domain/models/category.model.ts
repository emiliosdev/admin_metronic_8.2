export interface Category{
  id: number
  name: string
  icon: string
}

export interface CategoryList extends Category{
  index?: number
 image: string
  enabled: boolean
  categorieSecond?: Pick<Category, "name">
  categorieThird?: Pick<Category, "name">
}

export interface CategoryResponse{
  data: CategoryList[]
  totalRecords: number
}

export interface CategoryConfigResponse {
  categoriesFirst: Category[],
  categoriesSecond: Category[],
}

export interface CategorySelectHtml extends Pick<Category, "id" | "name">{}

export interface CategoryData  {
  name: string;
  icon: string;
  position:number;
  categorieSecondId:number;
  categorieThirdId:number;
  fileImage:any;
  typeCategorie: number
}
