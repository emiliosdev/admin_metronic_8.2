import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent {

//  @ViewChild('modal') private modalComponent: ModalComponent;
  constructor() {}

  async openModal() {
  //  return await this.modalComponent.open();
  }
}
