import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { signUp, login } from 'src/app/data';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isuserLoggedIn = new BehaviorSubject<boolean>(false);
  isLogginFailed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _toaster: ToastrService
  ) {}

  signup(data: signUp): Observable<any> {
    if (!data.userName || !data.emailAddress || !data.password) {
      this._toaster.warning('Please fill all the required fields');
      return of(null);
    }
    try {
      return this._http
        .post<any>('  http://localhost:3000/users', data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .pipe(
          tap((response: any) => {
            this._toaster.success('User sign-up successfully');
            this.isuserLoggedIn.next(true);
            this._router.navigate(['/home']);
          })
        );
    } catch (error) {
      console.log('Signup failed', error);
      this._toaster.error('An error occurred during Signup. Please try again.');
      return of(null);
    }
  }

  login(data: login): Observable<any> {
    if (!data.emailAddress || !data.password) {
      this._toaster.warning('Please fill all the required fields');
      return of(null);
    }
    return this._http.get<any>('http://localhost:3000/users').pipe(
      tap((users: any) => {
        const user = users.find(
          (u: any) =>
            u.emailAddress === data.emailAddress && u.password === data.password
        );
        if (user) {
          this._toaster.success('User logged in successfully');
          this.isuserLoggedIn.next(true);
          this.isLogginFailed.next(false);
          this._router.navigate(['./home']);
        } else {
          this.isuserLoggedIn.next(false);
          this._toaster.error('Invalid credentials');
        }
      }),
      catchError((error: any) => {
        console.log('API error:', error);
        this._toaster.warning(
          'An error occurred during login. Please try again.'
        );
        return of(null);
      })
    );
  }

  reloadSeller() {
    if (localStorage.getItem('state')) {
      this.isuserLoggedIn.next(true);
      this._router.navigate(['./home']);
    }
  }

  getCurrentUser(): any {
    const user = localStorage.getItem('state');

    if (user) {
      return JSON.parse(user);
    } else {
      return null;
    }
  }
}
