import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Todo List';
  result: string = '';

  handleButton() {
    this.result = (<HTMLButtonElement>event?.currentTarget).dataset.val || '';
  }
}
