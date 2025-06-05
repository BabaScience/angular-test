import { Injectable, signal, computed } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class Todos {
  protected todos = signal<Todo[]>([]);
  protected filter = signal<'all' | 'active' | 'completed'>('all');

  getTodosList(): Todo[] {
    return this.todos().filter(todo => {
      if (this.filter() === 'all') return true;
      if (this.filter() === 'active') return !todo.completed;
      return todo.completed;
    })
  }

  addTodo(title: string) {
    this.todos.update(todos => [...todos, { id: crypto.randomUUID(), title, completed: false }]);
  }
  
  removeTodo(id: string) {
    this.todos.update(todos => todos.filter(todo => todo.id !== id));
  }
  
  
  
  

  constructor() { }
}
