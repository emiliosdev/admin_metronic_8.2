import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { KeeniconComponent } from '@presentation/shared/components/keenicon/keenicon.component';
import { DropdownMenu1Component } from '@presentation/partials/content/dropdown-menus/dropdown-menu1/dropdown-menu1.component';

@Component({
    selector: 'app-mixed-widget4',
        imports: [NgClass,KeeniconComponent, DropdownMenu1Component],
    templateUrl: './mixed-widget4.component.html',
})
export class MixedWidget4Component {
  @Input() color: string = '';
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() progress: string = '';
  constructor() {}
}
