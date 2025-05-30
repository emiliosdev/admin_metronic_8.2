import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-saas',
    templateUrl: './saas.component.html',
    styleUrls: ['./saas.component.scss'],
    standalone: false
})
export class SaasComponent implements OnInit {
  @Input() appPageTitleDisplay: boolean;

  constructor() {}

  ngOnInit(): void {}
}
