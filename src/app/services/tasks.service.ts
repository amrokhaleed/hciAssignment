import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  // Initialize tasks array from local storage, or an empty array if not present
  tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');

  constructor() { }

  // Function to save tasks to local storage
  saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
    // Save tasks to local storage after deletion
    this.saveTasksToLocalStorage();
  }

  saveTask(title: any, description: any) {
    this.tasks.push({
      title,
      description
    });
    // Save tasks to local storage after addition
    this.saveTasksToLocalStorage();
  }
}
