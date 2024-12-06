import { Component,OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task/task.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  urgentTasks: any[] = [];
  notUrgentTasks: any[] = [];
  laterTasks: any[] = [];
  isAddTaskModalOpen = false; // ตัวแปรสถานะป๊อปอัพ

  openAddTaskModal() {
    this.isAddTaskModalOpen = true;
  }

  closeAddTaskModal() {
    this.isAddTaskModalOpen = false;
  }

  constructor(private taskService: TaskService) {}


  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getAllTask().subscribe(tasks => {
      this.urgentTasks = tasks.filter(task => task.category === 'ด่วน');
      this.notUrgentTasks = tasks.filter(task => task.category === 'ไม่รีบ');
      this.laterTasks = tasks.filter(task => task.category === 'จะทำแต่ไว้ก่อน');
    });
  }

}
