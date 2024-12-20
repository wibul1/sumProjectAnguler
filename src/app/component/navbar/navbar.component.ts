import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { UserService } from 'src/app/service/user/user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // username: string = 'Guest';
  isDropdownOpen: boolean = false;
  userProfile: any;

  constructor(
    private router: Router,
    private authService: AuthService, 
    private userService: UserService) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile() {
    if (this.authService.isLoggedIn()) {
      this.authService.getUserProfile().subscribe({
        next: (profile) => {
          this.userProfile = profile;
          console.log('User profile loaded:', profile);
        },
        error: (error) => {
          console.error('Error loading profile:', error);
          this.router.navigate(['/login']);
        }
      });
    } else {
      this.router.navigate(['/login']);
    }
  }
  

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: () => {
        this.router.navigate(['/login']);
      }
    });
    this.isDropdownOpen = false;
  }
  

  onClickOutside() {
    this.isDropdownOpen = false;
  }
}
