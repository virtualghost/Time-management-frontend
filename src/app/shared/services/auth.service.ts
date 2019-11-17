import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoginData } from 'src/app/models/login-data.model';
import { RegisterData } from 'src/app/models/register-data.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpClient) {}

    login(data: LoginData): Observable<any> {
        return this.http.post(
          'http://localhost:63779/api/auth/login',
          data,
          {observe: 'response'}
        ).pipe(
          map(response => {
            return response;
        }));
    }

    register(data: RegisterData) {
      return this.http.post(
        'http://localhost:63779/api/auth/register',
        data,
        {observe: 'response'}
      ).pipe(
        map(response => {
          return response;
      }));
    }
}