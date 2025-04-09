import { Component } from '@angular/core';
import { KeeniconComponent } from '@presentation/shared/components/keenicon/keenicon.component';
import { DropdownMenu1Component } from '@presentation/partials/content/dropdown-menus/dropdown-menu1/dropdown-menu1.component';

@Component({
    selector: 'app-lists-widget1',
    templateUrl: './lists-widget1.component.html',
     imports: [KeeniconComponent, DropdownMenu1Component],

})
export class ListsWidget1Component {
  constructor() {}
}
