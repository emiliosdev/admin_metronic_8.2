import { Component, OnInit } from '@angular/core';
import { KeeniconComponent } from '@presentation/shared/components/keenicon/keenicon.component';
import { ChatInnerComponent } from '@presentation/partials/content/chat-inner/chat-inner.component';

@Component({
    selector: 'app-messenger-drawer',
    imports: [
      KeeniconComponent,
      ChatInnerComponent
    ],
    templateUrl: './messenger-drawer.component.html',
})
export class MessengerDrawerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
