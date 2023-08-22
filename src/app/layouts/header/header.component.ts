import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  isAuthenticated: boolean = false;
  userInLocalStorage: boolean = false;

  private authSubscription: Subscription | undefined;

  constructor(private _router: Router) {
    const user = localStorage.getItem('state');
    if (user) {
      const parsedUser = JSON.parse(user);
      const { auth } = parsedUser;
      this.isAuthenticated = auth.user;
      console.log(this.isAuthenticated);
    }
  }

  login() {
    this._router.navigate(['./auth']);
  }

  logout() {
    localStorage.removeItem('state');
    this.isAuthenticated = false;
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
