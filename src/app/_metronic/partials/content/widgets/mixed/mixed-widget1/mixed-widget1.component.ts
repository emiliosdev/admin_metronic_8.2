import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-mixed-widget1',
    templateUrl: './mixed-widget1.component.html',
    standalone: false
})
export class MixedWidget1Component {
  @Input() color: string = '';
  constructor() {}
}
