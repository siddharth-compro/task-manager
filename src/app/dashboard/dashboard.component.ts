import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import { Task } from '../task';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tasks: Task[] = [];
  showLoading: Boolean = false;
  constructor(private taskService: TaskService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.tasks = data.tasks;
      this.showLoading = false;
    })
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(data => {
        this.tasks = data;
        this.showLoading = false;
      })


  }

  deleteTask(_id: String): void {
    if (window.confirm("Please confirm?")) {
      this.showLoading = true;
      this.taskService.deleteTask(_id)
      .subscribe(data => {
        this.getTasks();
      })
    } else {
    }
  }

  editTask(_id: String): void {
    this.router.navigateByUrl('/task/edit/'+ _id)
  }

}
