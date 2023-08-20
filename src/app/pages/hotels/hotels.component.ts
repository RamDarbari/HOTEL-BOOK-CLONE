import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { HotelState } from '../store/hotels.state';
// import { getFilteredHotelsWithCriteria } from '../store/hotels.selectors';
import { hotels } from 'src/app/data';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit {
  // filteredHotels: hotels[] = []; // Initialize an array to hold the filtered hotels

  // constructor(private store: Store<HotelState>) {}

  ngOnInit(): void {
    // // Subscribe to the filtered hotels with criteria selector
    // this.store.select(getFilteredHotelsWithCriteria).subscribe(
    //   (filteredHotels) => {
    //     this.filteredHotels = filteredHotels;
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
  }
}
