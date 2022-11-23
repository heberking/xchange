import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpOptions } from '../models/http-options';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  BACKEND_URL: string = environment.backendUrl;

  constructor(private http: HttpClient) {}

  public get<T>(endpoint: string, options?: HttpOptions): Observable<T> {
    return this.http.get<T>(`${this.BACKEND_URL}${endpoint}`, options);
  }

  public post<T1, T2>(endpoint: string, data: T1, options?: HttpOptions): Observable<T2> {
    return this.http.post<T2>(`${this.BACKEND_URL}${endpoint}`, data, options);
  }

  public put<T>(endpoint: string, data: any, options?: HttpOptions): Observable<T> {
    return this.http.put<T>(`${this.BACKEND_URL}${endpoint}`, data, options);
  }

  public delete<T>(endpoint: string, mock: boolean = false, options?: HttpOptions): Observable<T> {
    return this.http.delete<T>(`${this.BACKEND_URL}${endpoint}`, options);
  }
}
