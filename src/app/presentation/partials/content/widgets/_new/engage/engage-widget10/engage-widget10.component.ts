import { NgClass, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-engage-widget10',
    imports: [NgClass, NgStyle],
    templateUrl: './engage-widget10.component.html',
    styleUrls: ['./engage-widget10.component.scss'],
})
export class EngageWidget10Component implements OnInit {
  @Input() cssClass: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
