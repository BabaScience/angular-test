import { Component, inject, OnInit, signal } from '@angular/core';
import { Todos } from '../../services/todos';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList implements OnInit {

  todos = inject<Todos>(Todos);
  title = signal<string>('');

  ngOnInit() {
    this.todos = inject(Todos);
  }


  addTodo() {
    this.todos.addTodo(this.title());
    this.title.set('');
  }

  removeTodo(id: string) {
    this.todos.removeTodo(id);
  }

  onTitleChange(event: Event) {
    this.title.set((event.target as HTMLInputElement).value);
  }

}
