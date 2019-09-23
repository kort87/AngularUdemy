import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponseData } from './authresponsedata.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDFnuNd3PZlNLkakZFmRZj5HDxbXYf79zg',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(
        catchError(errorRes => {
          let errorMessage = 'An unknown error occured!';
          if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
          }
          switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'This email already exists';
              break;
          }
          return throwError(errorMessage);
        }

      ));
  }
}
