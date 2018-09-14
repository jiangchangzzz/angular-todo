import { Injectable } from '@angular/core';

import {Todo} from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  lastId = 0;

  todos: Todo[] = [];

  constructor() { }

  initTodo(todos: Todo[]) {
    this.todos = todos;
  }

  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getAllTodos() {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos.find(todo => todo.id === id);
  }

  toggleTodoComplete(todo: Todo) {
    const completedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return completedTodo;
  }

  clear() {
    this.todos = [];
  }
}
