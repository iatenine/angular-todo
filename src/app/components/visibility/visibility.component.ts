import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.component.html',
  styleUrls: ['./visibility.component.css'],
})
export class VisibilityComponent implements OnInit {
  hide: boolean = false;
  none: boolean = false;
  ifValue: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggleHide() {
    this.hide = !this.hide;
  }

  toggleNone() {
    this.none = !this.none;
  }

  toggleIf() {
    this.ifValue = !this.ifValue;
  }
}
