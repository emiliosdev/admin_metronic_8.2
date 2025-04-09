import { Component, Input } from '@angular/core';
import { KeeniconComponent } from '@presentation/shared/components/keenicon/keenicon.component';
import { DropdownMenu1Component } from '@presentation/partials/content/dropdown-menus/dropdown-menu1/dropdown-menu1.component';

@Component({
    selector: 'app-lists-widget4',
    imports: [KeeniconComponent, DropdownMenu1Component],
    templateUrl: './lists-widget4.component.html',
})
export class ListsWidget4Component {
  @Input() items: number = 6;
  constructor() {}
}
