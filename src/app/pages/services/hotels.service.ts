import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hotels } from 'src/app/data';
import { loadHotelsSuccess } from '../store/hotels.actions';
import { Store } from '@ngrx/store';
import { HotelState } from '../store/hotels.state';

@Injectable({
  providedIn: 'root',
})
export class HotelsService {
  constructor(private _http: HttpClient, private store: Store<HotelState>) {}

  loadHotels() {
    this._http
      .get<hotels[]>('http://localhost:3000/hotels')
      .subscribe((data) => {
        this.store.dispatch(loadHotelsSuccess({ hotels: data }));
      });
  }
}
