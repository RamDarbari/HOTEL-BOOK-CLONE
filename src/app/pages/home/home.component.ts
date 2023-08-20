import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DateAdapter } from '@angular/material/core';
import { HotelsService } from '../services/hotels.service';
import { Store } from '@ngrx/store';
import { filterHotels, loadHotels } from '../store/hotels.actions';
import { hotels } from 'src/app/data';

import { Router } from '@angular/router';

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
    this.store.dispatch(loadHotels());
    this.hotel.loadHotels();
  }

  onSearch() {
    this.store.dispatch(filterHotels({ city: this.selectedCity }));
    this.route.navigate(['/hotels']);
  }
}
