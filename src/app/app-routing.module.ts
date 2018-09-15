import { NgModule, enableProdMode } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodolistComponent } from './components/todolist/todolist.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: TodolistComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
