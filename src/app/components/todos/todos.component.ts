import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  title: string = 'Titel';
  todos: Array<Todo> = [];

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        completed: false,
      },
      {
        content: 'Done Todo',
        completed: true,
      },
    ];
  }
}
