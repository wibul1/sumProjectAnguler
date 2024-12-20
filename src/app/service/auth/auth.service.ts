import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8090/api';

  constructor(private http: HttpClient) {}

  // ฟังก์ชันสำหรับสมัครสมาชิก
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, user);
  }

  // ฟังก์ชันสำหรับเข้าสู่ระบบ
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { username, password }).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);  // เก็บโทเค็นใน localStorage
      }),
      catchError(error => {
        console.error('Login Error:', error);
        return throwError(error);  // ใช้ throwError จาก rxjs
      })
    );
  }
  
  

  // ฟังก์ชันสำหรับจัดเก็บ token หลังจาก login สำเร็จ
  saveToken(token: string): void {
    localStorage.setItem('token', token); // เก็บ token ไว้ใน localStorage
  }

  // ฟังก์ชันสำหรับดึง token จาก localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // ฟังก์ชันตรวจสอบว่าผู้ใช้ล็อกอินอยู่หรือไม่
  isLoggedIn(): boolean {
    return !!this.getToken();  // ถ้ามี token จะ return true
  }

  logout(): Observable<any> {
    const token = localStorage.getItem('token');
    // ลบ token ก่อนทำ request
    localStorage.removeItem('token');
    
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  
    return this.http.post<any>(`${this.apiUrl}/auth/logout`, {}, { headers }).pipe(
      catchError((error) => {
        console.error('Logout Error:', error);
        return throwError(error);
      })
    );
  }
  

  // เพิ่ม method นี้เพื่อลบ token
  removeToken(): void {
    localStorage.removeItem('token');
  }

  getUserProfile(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.getToken()}`, // ส่ง JWT Token ที่เก็บไว้
    });
  
    return this.http.get(`${this.apiUrl}/user/profile`, { headers });
  }
  
}