import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  constructor(public tasksService : TasksService,private router:Router){}
  saveTask(title:any,description:any){
    this.tasksService.saveTask(title.value, description.value);
    this.router.navigate(["/"]);
  }
}
