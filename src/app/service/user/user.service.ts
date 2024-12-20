import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8090/api'; // URL ของ API Backend

  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.get(`${this.apiUrl}/user/profile`, { headers }).pipe(
      catchError(error => {
        console.error('Error fetching user profile:', error);
        return throwError(error);
      })
    );
  }

   // เมธอดอื่นๆ ที่มีอยู่แล้ว...
   getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  
}

