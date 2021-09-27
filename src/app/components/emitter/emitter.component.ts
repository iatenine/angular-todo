import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css'],
})
export class EmitterComponent implements OnInit {
  @Output() selectedButton = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onButtonClicked() {
    this.selectedButton.emit();
  }
}
