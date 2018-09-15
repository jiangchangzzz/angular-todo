import { Component, OnInit } from '@angular/core';

import {TodoDataService} from '../../services/todo-data.service';
import { Todo } from '../../models/todo';
import {StorageService} from '../../services/storage.service';
import {TODO_KEY} from '../../constants/storage';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  newTodo: Todo = new Todo();

  constructor(
    private todoDataService: TodoDataService,
    private storageService: StorageService
    ) {

  }

  ngOnInit() {
    const todos = this.storageService.getItem(TODO_KEY);
    if (todos) {
      this.todoDataService.initTodo(todos as Todo[]);
    }
  }

  onSubmit() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  } 

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  save() {
    this.storageService.setItem(TODO_KEY, this.todos);
  }

  clear() {
    this.todoDataService.clear();
    this.storageService.clear(TODO_KEY);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
