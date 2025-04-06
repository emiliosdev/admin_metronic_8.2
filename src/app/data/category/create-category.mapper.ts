export class CreateCategoryMapper {
  static toJson(params: any): any {
    const formData = new FormData();
    formData.append("name", params.name);
    formData.append("icon",  params.icon);
    formData.append("position", params.position);
    formData.append("typeCategorie", params.typeCategorie);
    if(params.fileImage) {
      formData.append("file", params.fileImage);
    }
    if(params.categorieSecondId){
      formData.append("categorieSecondId", params.categorieSecondId);
    }
    if(params.categorieThirdId){
      formData.append("categorieThirdId", params.categorieThirdId);
    }
    return formData;
  }
}
