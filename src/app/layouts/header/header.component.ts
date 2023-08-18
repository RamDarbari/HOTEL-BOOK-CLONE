import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs'; // Import Subscription

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  isAuthenticated: boolean = false;
  userInLocalStorage: boolean = false;

  private authSubscription: Subscription | undefined; // Declare authSubscription

  constructor(private _router: Router) {
    // Check if there's a user in localStorage
    const user = localStorage.getItem('user');
    if (user) {
      this.userInLocalStorage = true;
    }
  }

  login() {
    this._router.navigate(['./auth']);
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
