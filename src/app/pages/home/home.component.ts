import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  today: Date = new Date();
  minDate: Date = new Date();

  checkInDate: Date | undefined;
  checkOutDate: Date | undefined;

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB'); // Set your desired locale
  }

  onCheckInDateChange(event: MatDatepickerInputEvent<Date>) {
    this.checkOutDate = undefined;
    this.minDate = event.value || this.today;
  }

  onCheckOutDateChange(event: Date) {
    // Handle check-out date change here
  }
}
