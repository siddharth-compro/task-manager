import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tasks: Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks()
      .subscribe(data => {
        this.tasks = data
      })
  }

  deleteTask(_id: String): void {
    if (window.confirm("Please confirm?")) {
      this.taskService.deleteTask(_id)
      .subscribe(data => {
        this.ngOnInit();
      })
    } else {
    }
  }

}
