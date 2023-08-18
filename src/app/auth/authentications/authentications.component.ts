import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { signUp, login } from 'src/app/data';
import { AuthService } from '../services/auth.service';
import { login1, signup } from '../store/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-authentications',
  templateUrl: './authentications.component.html',
  styleUrls: ['./authentications.component.scss'],
})
export class AuthenticationsComponent {
  constructor(
    private _admin: AuthService,
    private _router: Router,
    private store: Store
  ) {}
  sellerSignUp!: NgForm;
  showLogin = false;
  loginError: any;

  ngOnInit() {
    this._admin.reloadSeller();
  }

  onLogin() {
    this.showLogin = false;
  }

  onSignUp() {
    this.showLogin = true;
  }
  signUp(data: signUp): void {
    this.store.dispatch(signup({ signUpData: data }));
    this._admin.signup(data);
  }

  login(data: login) {
    this.store.dispatch(login1({ loginData: data }));
    this._admin.isLogginFailed.subscribe((isError) => {
      if (isError) {
        this.loginError = alert('Email or Password is not correct');
      }
    });
  }

  hasUpperCase(value: string): boolean {
    return /[A-Z]/.test(value);
  }

  hasSymbol(value: string): boolean {
    return /[!@#$%^&*()_+]/.test(value);
  }

  hasThreeConsecutiveNumbers(value: string): boolean {
    return /[0-9]{3,}/.test(value);
  }

  passwordIsValid(value: string): boolean {
    return (
      this.hasUpperCase(value) &&
      this.hasSymbol(value) &&
      !this.hasThreeConsecutiveNumbers(value) &&
      value.length >= 8
    );
  }
  passwordsDoNotMatch(): boolean {
    const password = this.sellerSignUp?.value?.password;
    const password2 = this.sellerSignUp?.value?.password2;
    return password !== password2;
  }
}
