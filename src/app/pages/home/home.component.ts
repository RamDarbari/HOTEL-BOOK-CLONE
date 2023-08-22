import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DateAdapter } from '@angular/material/core';
import { HotelsService } from '../services/hotels.service';
import { Store } from '@ngrx/store';
import { hotels } from 'src/app/data';

import { Router } from '@angular/router';
import { filterHotels } from '../store/hotels.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  today: Date = new Date();
  minDate: Date = new Date();
  location!: string;
  filteredHotels!: hotels[];
  checkInDate: Date | null = null;
  checkOutDate: Date | null = null;
  selectedCity!: string;
  selectedGuests!: number;
  todayDate = new Date();

  constructor(
    private dateAdapter: DateAdapter<Date>,
    private store: Store,
    private route: Router,
    private hotel: HotelsService
  ) {
    this.dateAdapter.setLocale('en-GB');
  }
  onCheckInDateChange(selectedDate: Date) {
    this.checkInDate = selectedDate;
    this.checkOutDate = null;
  }

  get minCheckOutDate(): Date | null {
    if (this.checkInDate) {
      const minDate = new Date(this.checkInDate);
      minDate.setDate(minDate.getDate() + 1);
      return minDate;
    }
    return null;
  }

  ngOnInit() {
    this.hotel.loadHotels();
  }

  isFormValid(): boolean {
    if (this.selectedCity && this.selectedGuests) {
      return true;
    } else {
      return false;
    }
  }

  onSearch() {
    if (this.isFormValid()) {
      this.store.dispatch(
        filterHotels({
          filters: {
            city: this.selectedCity,
            id: 0,
            image: '',
            name: '',
            price: 0,
            description: '',
            amenities: [],
            capacity: 0,
            beds: 0,
            bathrooms: 0,
          },
        })
      );
      this.route.navigate(['/hotels']);
    } else {
      // Show an alert indicating missing details
      alert('Please fill in all required details before proceeding.');
    }
  }
}
