import { Component } from '@angular/core';
import { KeeniconComponent } from '@presentation/shared/components/keenicon/keenicon.component';
import { DropdownMenu1Component } from '@presentation/partials/content/dropdown-menus/dropdown-menu1/dropdown-menu1.component';

@Component({
    selector: 'app-lists-widget2',
    imports: [KeeniconComponent, DropdownMenu1Component],
    templateUrl: './lists-widget2.component.html',
})
export class ListsWidget2Component {
  constructor() {}
}
