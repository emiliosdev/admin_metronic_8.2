import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterModule} from '@angular/router';
import { KeeniconComponent } from '@presentation/shared/components/keenicon/keenicon.component';

@Component({
    selector: 'app-sidebar-menu',
    imports: [KeeniconComponent, RouterModule],
    templateUrl: './sidebar-menu.component.html',
})
export class SidebarMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
