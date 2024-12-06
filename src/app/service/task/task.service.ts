
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8090/api/task';

  constructor(private http: HttpClient) { }

  getAllTask(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // POST: Create a new book
  createTask(book: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, book);
  }

  getTaskId(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  changeTask(payload: any): Observable<any> {
    const url = `${this.apiUrl}/changeTask`;
    return this.http.post<any>(url, payload);
  }
}
