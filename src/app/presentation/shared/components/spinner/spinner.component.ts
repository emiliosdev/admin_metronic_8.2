import {Component, input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-spinner',
  imports: [
    NgClass
  ],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
   isFullScreen = input(true)// Por defecto, cubre toda la pantalla

}
