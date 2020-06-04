import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Task } from './task'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private ROOT_URL = 'https://thawing-bayou-62614.herokuapp.com/'
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.ROOT_URL+'todos');
  }

  deleteTask(_id: String): Observable<object> {
    return this.http.delete(this.ROOT_URL + "todos/" + _id)
  }

  addTask(_task: Task): Observable<object> {
    return this.http.post(this.ROOT_URL + "todos", _task);
  }

  getTask(_id: String): Observable<Task> {
    return this.http.get<Task>(this.ROOT_URL + "todos/" + _id)
  }

  putTask(_task: Task): Observable<object> {
    return this.http.put(this.ROOT_URL + "todos/" + _task._id, _task)
  }
}
