import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Task } from './task';
import { TaskService } from './task.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskResolverService implements Resolve<Task[]>{

  constructor(private taskService: TaskService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
   Task[] | Observable<Task[]> | Promise<Task[]> {
    return this.taskService.getTasks();
  }
}
