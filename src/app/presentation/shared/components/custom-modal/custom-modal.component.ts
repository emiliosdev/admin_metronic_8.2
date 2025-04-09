import {  Component, computed, Input, input, output,   TemplateRef} from '@angular/core';
import {NgClass, NgTemplateOutlet} from "@angular/common";
import {SpinnerComponent} from "@presentation/shared/components/spinner/spinner.component";

export type ModalCustomConfig = {
  showHeader?: boolean,
  showFooter?: boolean,
  showBtnCancel?: boolean,
  title?: string  ,
  alignBtnFooter?: 'flex-end' | 'flex-start' | 'flex-center',
  btnSize?: 'btn-sm' | 'btn-lg' | 'btn-xl',
}

@Component({
  selector: 'app-custom-modal',
  imports: [
    NgClass,
    NgTemplateOutlet,
    SpinnerComponent
  ],
  templateUrl: './custom-modal.component.html',
  styleUrl: './custom-modal.component.scss',
})
export class CustomModalComponent {
  // Usando a nova sintaxe de input/output do Angular 17+
  isLoading = input<boolean>(false);
  close = output<void>();

  modalConfig = input<ModalCustomConfig>({ });

  // Usando signals para gerenciar estado interno
  modalConfigRef = computed(()=>{

    return {
      showHeader: true,
      showFooter: true,
      showBtnCancel: true,
      title: '',
      ...this.modalConfig()
    }
  })


  // Usando @Input para compatibilidade com versões anteriores (opcional)
  @Input() fragmentBody: TemplateRef<any> | null = null;
  @Input() fragmentBtnFooter: TemplateRef<any> | null = null;

  ngOnInit() {

  }

}
