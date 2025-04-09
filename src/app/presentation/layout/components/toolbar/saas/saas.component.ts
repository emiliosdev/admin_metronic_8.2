import { Component, Input, OnInit } from '@angular/core';
import { KeeniconComponent } from '@presentation/shared/components/keenicon/keenicon.component';

@Component({
    selector: 'app-saas',
    imports: [KeeniconComponent],
    templateUrl: './saas.component.html',
    styleUrls: ['./saas.component.scss'],
})
export class SaasComponent implements OnInit {
  @Input() appPageTitleDisplay: boolean;

  constructor() {}

  ngOnInit(): void {}
}
