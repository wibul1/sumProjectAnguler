import { Component,EventEmitter, Output } from '@angular/core';
import { TaskService } from 'src/app/service/task/task.service';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {
  @Output() bookAdded = new EventEmitter<void>();

  newtask = {title:'',category:'',description:'',datetime:'',completed:true};

  constructor(private taskService: TaskService) {}

  createBook(): void {
    this.taskService.createTask(this.newtask).subscribe((data) => {
      this.newtask = {title:'',category:'',description:'',datetime:'',completed:true}; // รีเซ็ตฟอร์ม
      this.bookAdded.emit(); // ส่งอีเวนต์เพื่อบอกว่าหนังสือถูกเพิ่มแล้ว
    });
  }
}
