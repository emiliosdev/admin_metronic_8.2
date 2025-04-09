import { KeyValuePipe, NgTemplateOutlet } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { KeeniconComponent } from '@presentation/shared/components/keenicon/keenicon.component';
import { environment } from '../../../../../../environments/environment';

@Component({
    selector: 'app-explore-main-drawer',
    imports:[KeeniconComponent, KeyValuePipe],
    templateUrl: './explore-main-drawer.component.html',
})
export class ExploreMainDrawerComponent implements OnInit {
  appThemeName: string = environment.appThemeName;
  appPurchaseUrl: string = environment.appPurchaseUrl;
  appPreviewUrl: string = environment.appPreviewUrl;
  appDemos = environment.appDemos;

  constructor() {
  }

  ngOnInit(): void {
  }
}
