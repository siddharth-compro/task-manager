import { Component, OnInit } from '@angular/core';
import { TaskService } from "../task.service";
import { Task } from '../task';
import { Location } from "@angular/common";
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  task: Task;
  showLoading: Boolean;
  constructor(private taskService: TaskService, private location: Location, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let _id = this.route.snapshot.params.id
    this.getTask(_id);
  }

  goBack(): void {
    this.location.back();
  }

  getTask(_id: String): void {
    this.showLoading = true;
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

  editTask(_id: String): void {
    this.router.navigateByUrl('/task/edit/'+ _id)
  }

}
