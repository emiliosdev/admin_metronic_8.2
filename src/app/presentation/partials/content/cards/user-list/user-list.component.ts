import { Component, Input, OnInit } from '@angular/core';
import { IconUserModel } from '../icon-user.model';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-user-list',
    imports: [NgbTooltipModule],
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Input() users: Array<IconUserModel> = [];

  constructor() {}

  ngOnInit(): void {}
}
