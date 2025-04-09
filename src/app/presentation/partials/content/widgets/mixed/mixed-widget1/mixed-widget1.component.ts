import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { KeeniconComponent } from '@presentation/shared/components/keenicon/keenicon.component';
import { DropdownMenu1Component } from '@presentation/partials/content/dropdown-menus/dropdown-menu1/dropdown-menu1.component';

@Component({
    selector: 'app-mixed-widget1',
    imports: [NgClass,KeeniconComponent, DropdownMenu1Component],
    templateUrl: './mixed-widget1.component.html',
})
export class MixedWidget1Component {
  @Input() color: string = '';
  constructor() {}
}
