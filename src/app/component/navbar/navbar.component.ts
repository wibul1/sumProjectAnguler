import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  username: string = 'John Doe';
  isDropdownOpen: boolean = false;

  constructor(
    private router: Router, 
    private authService: AuthService
  ) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        // นำทางไปยังหน้า login
        this.router.navigate(['/login']);
      },
      error: () => {
        // กรณีเกิดข้อผิดพลาด ก็ให้นำทางไปหน้า login
        this.router.navigate(['/login']);
      }
    });
  
    // ปิด dropdown
    this.isDropdownOpen = false;
  }

  onClickOutside() {
    this.isDropdownOpen = false;
  }
}