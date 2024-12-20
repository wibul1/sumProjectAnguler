import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: any = {};
  confirmPassword: string = '';
  currentStep: number = 1;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private router: Router, 
    private authService: AuthService, 
  ) {}

  proceedToNextStep() {
    if (this.form.email && this.form.firstName && this.form.lastName) {
      this.currentStep = 2;
    } else {
      alert('Please fill in all personal information');
    }
  }

  backToPreviousStep() {
    this.currentStep = 1;
  }

  onSubmit() {
    // Validate password match
    if (this.form.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.authService.register(this.form).subscribe(
      (data: any) => {
        // console.log('Register successful!', data);
        this.isSignUpFailed = false;
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      (err: any) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        alert('Registration failed: ' + this.errorMessage);
      }
    );
  }
}
