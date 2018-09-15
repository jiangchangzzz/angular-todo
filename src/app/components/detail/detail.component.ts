import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Todo } from '../../models/todo';
import { TodoDataService } from '../../services/todo-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  todo: Todo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private todoDataService: TodoDataService
  ) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.params['id'], 10);
    this.todo = this.todoDataService.getTodoById(id);

    if(!this.todo){
      this.router.navigate(['/list']);
    }
  }

  goBack(){
    this.location.back();
  }
}
