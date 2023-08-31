import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { hotels } from 'src/app/data';
import { HotelsService } from 'src/app/pages/services/hotels.service';
import {
  filterHotels,
  setFilterAndDates,
} from 'src/app/pages/store/hotels.actions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  today: Date = new Date();
  minDate: Date = new Date();
  location!: string;
  filteredHotels!: hotels[];
  checkInDate: Date | null = null;
  checkOutDate: Date | null = null;
  selectedCity!: string;
  selectedGuests!: number;
  todayDate = new Date();
  isSearchDisabled: boolean = false;

  constructor(
    private dateAdapter: DateAdapter<Date>,
    private store: Store,
    private route: Router,
    private hotel: HotelsService,
    private _toaster: ToastrService
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
      if (this.isGuestsInputValid()) {
        this.store.dispatch(
          filterHotels({
            filters: {
              checkInDate: this.checkInDate,
              checkOutDate: this.checkOutDate,
              id: 0,
              image: '',
              city: this.selectedCity,
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
        this.store.dispatch(
          setFilterAndDates({
            city: this.selectedCity,
            guests: this.selectedGuests,
            checkInDate: this.checkInDate,
            checkOutDate: this.checkOutDate,
          })
        );
        // this.route.navigate(['/hotels']);
      } else {
        this.selectedGuests = 1;
        this._toaster.error('Please enter a number of guests between 1 and 9.');
      }
    } else {
      this._toaster.warning(
        'Please fill in all required details before proceeding.'
      );
    }
  }

  isGuestsInputValid(): boolean {
    if (
      this.selectedGuests &&
      (this.selectedGuests < 1 || this.selectedGuests > 9)
    ) {
      return false;
    }
    return true;
  }
}
