import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { hotels } from 'src/app/data';
import {
  selectFilteredHotelsData,
  selectHotels,
} from '../store/hotels.selectors';
import { hotelsReducer } from '../store/hotels.reducer';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit {
  filteredHotelsData$: Observable<any> | null = null;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.filteredHotelsData$ = this.store.select(selectFilteredHotelsData);
  }
}
