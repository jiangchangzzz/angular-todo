import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from '../../models/todo';
import { TodoDataService } from '../../services/todo-data.service';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(
    private todoDataService: TodoDataService,
    private router: Router
  ) { 

  }

  ngOnInit() {
  }

  toggleTodoComplete(todo){
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo){
    this.todoDataService.deleteTodoById(todo.id);
  }

  goDetail(todo){
    this.router.navigate(['/detail', todo.id]);
  }
}
