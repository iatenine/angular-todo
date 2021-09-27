import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Array<Todo> = [];
  inputNewItem: string = 'Hello, there!!';
  addItemButtonLabel: string = 'Add Item';

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
      {
        content: 'Ending event to see how deleteEntry() works',
        completed: true,
      },
    ];
  }

  addTodo() {
    if (!this.inputNewItem) return;
    this.todos.push({
      content: this.inputNewItem,
      completed: false,
    });

    this.inputNewItem = '';
  }

  toggleDone(id: number) {
    if (!this.todos[id]) return;
    this.todos[id].completed = !this.todos[id].completed;
  }

  deleteEntry(id: number) {
    if (!this.todos[id]) return;
    this.todos = this.todos.filter((elem: Todo, index: number) => id !== index);
  }
}
