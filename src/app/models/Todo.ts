export class Todo {
  content: String;
  completed: boolean;

  constructor(content: String, completed: boolean = false) {
    this.content = content;
    this.completed = completed;
  }
}
