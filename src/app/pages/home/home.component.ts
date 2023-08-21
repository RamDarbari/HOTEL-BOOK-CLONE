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
  checkInDate: Date | undefined;
  checkOutDate: Date | undefined;
  selectedCity!: string;
  selectedGuests!: number;

  constructor(
    private dateAdapter: DateAdapter<Date>,
    private store: Store,
    private route: Router,
    private hotel: HotelsService
  ) {
    this.dateAdapter.setLocale('en-GB');
  }

  onCheckInDateChange(event: MatDatepickerInputEvent<Date>) {
    this.checkOutDate = undefined;
    this.minDate = event.value || this.today;
  }

  onCheckOutDateChange(event: Date) {}

  ngOnInit() {
    // this.store.dispatch(loadHotels());
    //  this.store.dispatch(HotelActions.loadHotels());
    this.hotel.loadHotels();
  }

  onSearch() {
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
  }
}
