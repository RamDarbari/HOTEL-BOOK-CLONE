import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DateAdapter } from '@angular/material/core';
import { HotelsService } from '../services/hotels.service';
import { Store } from '@ngrx/store';
import { HotelState } from '../store/hotels.state';
import { applyFilter, loadHotelsSuccess } from '../store/hotels.actions';
import {
  getFilteredHotels,
  getFilteredHotelsWithCriteria,
} from '../store/hotels.selectors';
import { hotels } from 'src/app/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  today: Date = new Date();
  minDate: Date = new Date();
  location!: string;
  filteredHotels!: hotels[];
  error: any;

  checkInDate: Date | undefined;
  checkOutDate: Date | undefined;

  selectedCity!: string; // Add this property
  selectedGuests!: number; // Add this property

  filteredHotels$: Observable<hotels[]>;

  constructor(
    private dateAdapter: DateAdapter<Date>,
    private store: Store,
    private hotelService: HotelsService,
    private _http: HttpClient
  ) {
    this.dateAdapter.setLocale('en-GB'); // Set your desired locale
    this.hotelService.loadHotels();
    this.filteredHotels$ = this.store.select(getFilteredHotelsWithCriteria);
  }

  onCheckInDateChange(event: MatDatepickerInputEvent<Date>) {
    this.checkOutDate = undefined;
    this.minDate = event.value || this.today;
  }

  onCheckOutDateChange(event: Date) {
    // Handle check-out date change here
  }

  onSearch() {
    const filterCriteria = {
      location: this.selectedCity,
      checkInDate: this.checkInDate,
      checkOutDate: this.checkOutDate,
      guests: this.selectedGuests,
    };

    this.store.dispatch(applyFilter({ filterCriteria }));
  }
}
