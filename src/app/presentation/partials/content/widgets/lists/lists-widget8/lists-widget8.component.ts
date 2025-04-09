import { Component, Input } from '@angular/core';
import { KeeniconComponent } from '@presentation/shared/components/keenicon/keenicon.component';
import { DropdownMenu1Component } from '@presentation/partials/content/dropdown-menus/dropdown-menu1/dropdown-menu1.component';

@Component({
    selector: 'app-lists-widget8',
    templateUrl: './lists-widget8.component.html',
 imports: [KeeniconComponent, DropdownMenu1Component],
})
export class ListsWidget8Component {
  @Input() cssClass = '';
  constructor() {}
}
