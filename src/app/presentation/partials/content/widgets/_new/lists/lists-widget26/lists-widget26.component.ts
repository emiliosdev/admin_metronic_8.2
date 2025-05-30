import { Component, OnInit } from '@angular/core';
import { KeeniconComponent } from '@presentation/shared/components/keenicon/keenicon.component';
import { DropdownMenu2Component } from '@presentation/partials/content/dropdown-menus/dropdown-menu2/dropdown-menu2.component';

@Component({
    selector: 'app-lists-widget26',
    imports: [KeeniconComponent, DropdownMenu2Component],
    templateUrl: './lists-widget26.component.html',
    styleUrls: ['./lists-widget26.component.scss'],
})
export class ListsWidget26Component implements OnInit {
  rows: Array<{ description: string }>;

  constructor() {}

  ngOnInit(): void {
    this.rows = [
      { description: 'Avg. Client Rating' },
      { description: 'Instagram Followers' },
      { description: 'Google Ads CPC' },
    ];
  }
}
