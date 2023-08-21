import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hotels } from 'src/app/data';
import { loadHotelsSuccess } from '../store/hotels.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotelsService {
  constructor(private _http: HttpClient, private store: Store) {}

  loadHotels(): Observable<hotels[]> {
    return this._http.get<hotels[]>('http://localhost:3000/hotels');
  }
}
