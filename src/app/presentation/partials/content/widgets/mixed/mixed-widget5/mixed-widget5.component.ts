import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { KeeniconComponent } from '@presentation/shared/components/keenicon/keenicon.component';
import { DropdownMenu1Component } from '@presentation/partials/content/dropdown-menus/dropdown-menu1/dropdown-menu1.component';

@Component({
    selector: 'app-mixed-widget5',
    templateUrl: './mixed-widget5.component.html',
        imports: [],
})
export class MixedWidget5Component {
  @Input() color: string = '';
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() time: string = '';
  @Input() description: string = '';
  constructor() {}
}
