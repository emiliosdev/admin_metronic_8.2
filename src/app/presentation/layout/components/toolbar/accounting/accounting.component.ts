import { Component, OnInit } from '@angular/core';
import { KeeniconComponent } from '@presentation/shared/components/keenicon/keenicon.component';

@Component({
    selector: 'app-accounting',
    imports: [KeeniconComponent],
    templateUrl: './accounting.component.html',
    styleUrls: ['./accounting.component.scss'],
})
export class AccountingComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
