import { Component } from '@angular/core';
import { KeeniconComponent } from '@presentation/shared/components/keenicon/keenicon.component';
import { DropdownMenu1Component } from '@presentation/partials/content/dropdown-menus/dropdown-menu1/dropdown-menu1.component';

@Component({
    selector: 'app-lists-widget6',
    imports: [KeeniconComponent, DropdownMenu1Component],
    templateUrl: './lists-widget6.component.html',
})
export class ListsWidget6Component {
  constructor() {}
}
