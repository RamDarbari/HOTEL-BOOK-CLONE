import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators'; // Import map and catchError
import {
  filterHotels,
  loadHotels,
  loadHotelsSuccess,
  setFilterAndDates,
  someErrorAction,
} from './hotels.actions';
import { HotelsService } from '../services/hotels.service';
import { of } from 'rxjs';
import { hotels } from 'src/app/data';

@Injectable()
export class HotelEffects {
  filterHotels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(filterHotels),
      switchMap(({ filters }) =>
        this.hotelsService.loadHotels().pipe(
          map((hotels: hotels[]) =>
            loadHotelsSuccess({
              allHotels: hotels.filter(
                (hotel: hotels) => hotel.city === filters.city
              ),
            })
          ),
          catchError((error) => of(someErrorAction({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private hotelsService: HotelsService
  ) {}
}
