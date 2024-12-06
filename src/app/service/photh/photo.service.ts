import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = 'http://localhost:8090/api/photo'; // URL ของ API

  constructor(private http: HttpClient) {}

  getAllPhotos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createPhoto(photo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, photo);
  }
}
