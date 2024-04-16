import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  taskArray: { taskName: string, isCompleted: boolean, isEditable: boolean }[];

  constructor() {
    this.taskArray = [];
  }

  ngOnInit(): void {
    // Retrieve tasks from local storage when the component initializes
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.taskArray = JSON.parse(storedTasks);
    } else {
      // If no tasks are found in local storage, initialize with a default task
      this.taskArray = [{ taskName: 'Homework', isCompleted: false, isEditable: false }];
    }
  }

  onSubmit(form: NgForm) {
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false,
      isEditable: false
    });

    // Save tasks to local storage after adding a new task
    localStorage.setItem('tasks', JSON.stringify(this.taskArray));

    form.reset();
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1);
    // Update tasks in local storage after deleting a task
    localStorage.setItem('tasks', JSON.stringify(this.taskArray));
  }

  onCheck(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
    // Update tasks in local storage after checking/unchecking a task
    localStorage.setItem('tasks', JSON.stringify(this.taskArray));
  }

  onEdit(index: number) {
    this.taskArray[index].isEditable = true;
  }

  onSave(index: number, newtask: string) {
    this.taskArray[index].taskName = newtask;
    this.taskArray[index].isEditable = false;
    // Update tasks in local storage after saving an edited task
    localStorage.setItem('tasks', JSON.stringify(this.taskArray));
  }
}
