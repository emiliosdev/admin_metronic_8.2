import {Component, inject, signal} from '@angular/core';
import {ToasterService} from "@presentation/shared/services/toaster.service";
import {CreateCategoryUseCase} from "@domain/use-cases/category/create-category.use-case";
import {FormsModule} from "@angular/forms";
import {GetConfigCategoryUseCase} from "@domain/use-cases/category/get-config-category.use-case";
import {CategoryData, CategorySelectHtml} from "@domain/models/category.model";
import {imgDefault} from "@domain/utils/constants";

@Component({
  selector: 'app-create-categorie',
  imports: [
    FormsModule
  ],
  templateUrl: './create-categorie.component.html',
})
export class CreateCategorieComponent {
  private $createUseCase = inject(CreateCategoryUseCase)
  private $getConfigUseCase = inject(GetConfigCategoryUseCase)
  private _tS = inject(ToasterService)

  typeCategorie = signal(1);

  dataForm = {
    icon: "",
    position: 1,
  } as CategoryData;
  imagenPreview:any = imgDefault();

  categoriesFirst = signal<CategorySelectHtml[]>([])
  categoriesSecond = signal<CategorySelectHtml[]>([])

  private getConfig(){
    this.$getConfigUseCase.execute().subscribe(response=>{
      this.categoriesFirst.set(response.categoriesFirst)
      this.categoriesSecond.set(response.categoriesSecond)
    })
  }

  ngOnInit(){
    this.getConfig()
  }



  processFile($event:any){
    if($event.target.files && $event.target.files[0].type.indexOf('image')<0){
      this._tS.toastr({
        type: 'warning',
        message: 'El archivo no es una imagen'
      })
      return
    }
    this.dataForm.fileImage = $event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(this.dataForm.fileImage);
    reader.onloadend = ()=>{
      this.imagenPreview = reader.result;
    }

  }


  save(){
    if(!this.dataForm.name || !this.dataForm.position){
      this._tS.toastr({
        type: 'warning',
        message: 'Los campos con el * son obligatorio'
      })
      return
    }
    if(this.typeCategorie()===1 && !this.dataForm.icon){
      this._tS.toastr({
        type: 'warning',
        message: 'El ícono es obligatorio'
      })
      return
    }

    if(this.typeCategorie()===1 && !this.dataForm.fileImage){
      this._tS.toastr({
        type: 'warning',
        message: 'La imagen es obligatorio'
      })
      return
    }
    if(this.typeCategorie()===2 && !this.dataForm.categorieSecondId){
      this._tS.toastr({
        type: 'warning',
        message: 'El departamente es obligatorio'
      })
      return
    }
    if(this.typeCategorie()===3 && (!this.dataForm.categorieSecondId || !this.dataForm.categorieThirdId)){
      this._tS.toastr({
        type: 'warning',
        message: 'El departamente y la categoria es obligatorio'
      })
      return;
    }

    const params = {
      ...this.dataForm,
      typeCategorie: this.typeCategorie()
    }

    this.$createUseCase.execute(params).subscribe(response=>{
      if(response.code==="0"){
        this._tS.toastr({
          type: 'warning',
          message: response.message
        })
      }
      if(response.code==="1"){
        this._tS.toastr({
          type: 'success',
          message: response.message
        })
        this.dataForm = {
          icon: "",
          position: 1
        } as CategoryData;
        this.imagenPreview=null;
        this.getConfig()
      }
    })

  }

}
