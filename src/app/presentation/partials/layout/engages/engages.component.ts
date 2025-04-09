import { Component, OnInit } from '@angular/core';
import { ExploreMainDrawerComponent } from '@presentation/partials/layout/engages/explore-main-drawer/explore-main-drawer.component';
import { HelpDrawerComponent } from '@presentation/partials/layout/engages/help-drawer/help-drawer.component';

@Component({
    selector: 'app-engages',
    imports: [ExploreMainDrawerComponent,

      HelpDrawerComponent,

    ],
    templateUrl: './engages.component.html',
    styleUrls: ['./engages.component.scss'],
})
export class EngagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
