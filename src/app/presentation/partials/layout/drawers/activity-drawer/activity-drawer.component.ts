import { Component, OnInit } from '@angular/core';
import { KeeniconComponent } from '@presentation/shared/components/keenicon/keenicon.component';

@Component({
    selector: 'app-activity-drawer',
    imports: [KeeniconComponent],
    templateUrl: './activity-drawer.component.html',
})
export class ActivityDrawerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
