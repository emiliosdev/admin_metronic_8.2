import { Component, OnInit } from '@angular/core';
import { KeeniconComponent } from '@presentation/shared/components/keenicon/keenicon.component';

@Component({
    selector: 'app-extended',
    imports: [KeeniconComponent],
    templateUrl: './extended.component.html',
    styleUrls: ['./extended.component.scss'],
})
export class ExtendedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
