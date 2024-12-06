import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: any = {};  // สร้างตัวแปร form
  isSignUpFailed = false;  // ตัวแปรสำหรับตรวจสอบการสมัครล้มเหลว
  errorMessage = '';  // ตัวแปรเก็บข้อความผิดพลาด

  constructor(private authService: AuthService) {}

  // ฟังก์ชัน onSubmit() ที่จะถูกเรียกเมื่อฟอร์มถูก submit
  onSubmit() {
    this.authService.register(this.form).subscribe(
      (data: any) => {
        console.log('Register successful!', data);
        this.isSignUpFailed = false;
        alert('Registration successful!');
      },
      (err: any) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        alert('Registration failed: ' + this.errorMessage);
      }
    );
  }
}
