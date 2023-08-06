import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  fakeUsername = 'username';
  fakePassword = 'password';

  login(
    username: string | null | undefined,
    password: string | null | undefined
  ): Observable<any> {
    if (username === this.fakeUsername && password === this.fakePassword) {
      localStorage.setItem('token', 'my-super-secret-token-from-server');
      return of(new HttpResponse({ status: 200 }));
    } else {
      return of(new HttpResponse({ status: 401 }));
    }
  }

  register(): Observable<any> {
    localStorage.setItem('token', 'my-super-secret-token-from-server');
    return of(new HttpResponse({ status: 200 }));
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
