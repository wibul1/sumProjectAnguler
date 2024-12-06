import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8090/api/auth';

  constructor(private http: HttpClient) {}

  // ฟังก์ชันสำหรับสมัครสมาชิก
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  // ฟังก์ชันสำหรับเข้าสู่ระบบ
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
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

  // ฟังก์ชันสำหรับ logout (ลบ token)
  logout(): Observable<any> {
    const token = this.getToken();
    return this.http.post(`${this.apiUrl}/logout`, {}, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).pipe(
      tap(() => {
        // ลบ token ออกจาก localStorage เมื่อ logout สำเร็จ
        this.removeToken();
      }),
      catchError((error) => {
        // หากเกิด error ก็ให้ลบ token ออก
        this.removeToken();
        return of(null);
      })
    );
  }

  // เพิ่ม method นี้เพื่อลบ token
  removeToken(): void {
    localStorage.removeItem('token');
  }
  
}
