import { Component, OnInit } from '@angular/core';
import { KeeniconComponent } from '@presentation/shared/components/keenicon/keenicon.component';
import { DropdownMenu1Component } from '@presentation/partials/content/dropdown-menus/dropdown-menu1/dropdown-menu1.component';

@Component({
    selector: 'app-tables-widget3',
    templateUrl: './tables-widget3.component.html',
     imports: [KeeniconComponent, DropdownMenu1Component]
})
export class TablesWidget3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
