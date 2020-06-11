import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent} from './dashboard/dashboard.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskResolverService } from './task-resolver.service';


const routes: Routes = [
  { path: '', component: DashboardComponent, resolve: {tasks: TaskResolverService} },
  { path: 'dashboard', component: DashboardComponent, resolve: {tasks: TaskResolverService} },
  { path: 'tasks/:id', component: TaskDetailComponent },
  { path: 'task/new' , component: TaskFormComponent },
  { path: 'task/edit/:id', component: TaskFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
