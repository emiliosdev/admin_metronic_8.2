import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NotificationsInnerComponent } from '@presentation/partials/layout/extras/dropdown-inner/notifications-inner/notifications-inner.component';
import { QuickLinksInnerComponent } from '@presentation/partials/layout/extras/dropdown-inner/quick-links-inner/quick-links-inner.component';
import { SearchResultInnerComponent } from '@presentation/partials/layout/extras/dropdown-inner/search-result-inner/search-result-inner.component';
import { UserInnerComponent } from '@presentation/partials/layout/extras/dropdown-inner/user-inner/user-inner.component';
import { ThemeModeSwitcherComponent } from '@presentation/partials/layout/theme-mode-switcher/theme-mode-switcher.component';
import { KeeniconComponent } from '@presentation/shared/components/keenicon/keenicon.component';

@Component({
    selector: 'app-navbar',
    imports: [NgClass, KeeniconComponent,
      ThemeModeSwitcherComponent,
      UserInnerComponent
    ],
    templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  @Input() appHeaderDefaulMenuDisplay: boolean;
  @Input() isRtl: boolean;

  //itemClass: string = 'ms-1 ms-lg-3';
  itemClass: string = 'ms-1 ms-lg-3';
  btnClass: string = 'btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px';
  userAvatarClass: string = 'symbol-35px symbol-md-40px';
  btnIconClass: string = 'fs-2 fs-md-1';

  constructor() {}

  ngOnInit(): void {}
}
