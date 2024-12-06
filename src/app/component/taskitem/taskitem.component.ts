import { Component,Input } from '@angular/core';
import { TaskService } from 'src/app/service/task/task.service';
@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.css']
})
export class TaskitemComponent {
  @Input() task: any;
  isDetailsModalOpen = false;
  selectedTask: any = null;

  constructor(private taskService: TaskService) {}

  // ฟังก์ชันสำหรับเปิดป๊อปอัพและดึงข้อมูลรายละเอียดของ task

  viewDetails(taskId: string): void {
    this.getTaskId(taskId);
  }

  getTaskId(id: string): void {
    this.taskService.getTaskId(id).subscribe((data) => {
      this.selectedTask = data;
      this.isDetailsModalOpen = true; // เปิดป๊อปอัพเมื่อดึงข้อมูลสำเร็จ
    });
  }

  // ฟังก์ชันสำหรับปิดป๊อปอัพ
  closeDetailsModal() {
    this.isDetailsModalOpen = false;
    this.selectedTask = null;
  }
  
   // ฟังก์ชันสำหรับทำเครื่องหมายว่างานเสร็จสิ้น
   finishTask() {
    const payload = { id: this.task.id, completed: true }; // กำหนด payload ให้เหมาะสมกับ API

    this.taskService.changeTask(payload).subscribe(
      (response) => {
        console.log('Task marked as completed:', response);
        // คุณสามารถเพิ่มโค้ดสำหรับอัปเดต UI หลังจากทำเครื่องหมายงานเสร็จสิ้นได้
      },
      (error) => {
        console.error('Error updating task status:', error);
      }
    );
  }
}
