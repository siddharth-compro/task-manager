import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Location } from "@angular/common";
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  task = new Task("", "", "", false, []);
  showLoading: Boolean;
  constructor(private taskService: TaskService, private location: Location, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.showLoading = true;
    if(this.router.snapshot.params.id) {
      this.getTask(this.router.snapshot.params.id)
    } else {
      console.log("new")
      this.showLoading = false;
    }
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    if(this.router.snapshot.params.id) {
      this.taskService.putTask(this.task)
      .subscribe(
        (data) => {
          this.goBack();
        },    
        error => {
          console.log(error);
        }
      )
    } else {
      this.taskService.addTask(this.task)
      .subscribe(
        (data) => {
          this.goBack();
        },    
        error => {
          console.log(error);
        }
      )
    }
    
  }

  getTask(_id: String): void {
    this.taskService.getTask(_id)
      .subscribe(
        (data) => {
          this.task = data;
          this.showLoading = false;
        },
        (error) => {
          console.log(error);
        }
      )
  }
}
