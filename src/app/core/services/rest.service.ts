import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpOptions } from '../models/http-options';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  public get<T>(endpoint: string, options?: HttpOptions): Observable<T> {
    return this.http.get<T>(endpoint, options);
  }

  public post<T1, T2>(endpoint: string, data: T1, options?: HttpOptions): Observable<T2> {
    return this.http.post<T2>(endpoint, data, options);
  }

  public put<T>(endpoint: string, data: any, options?: HttpOptions): Observable<T> {
    return this.http.put<T>(endpoint, data, options);
  }

  public delete<T>(endpoint: string, mock: boolean = false, options?: HttpOptions): Observable<T> {
    return this.http.delete<T>(endpoint, options);
  }
}
