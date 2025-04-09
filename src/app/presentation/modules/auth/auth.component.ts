import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-auth',
    imports: [
        RouterLink,
        RouterOutlet,
      NgStyle
    ],
  templateUrl: './auth.component.html',
  styles: `
    :host {
      height: 100%;
    }


  `
})
export class AuthComponent {
  today: Date = new Date();

  constructor() {}

  ngOnInit(): void {
    // BODY_CLASSES.forEach((c) => document.body.classList.add(c));
  }

  ngOnDestroy() {
    // BODY_CLASSES.forEach((c) => document.body.classList.remove(c));
  }
}
