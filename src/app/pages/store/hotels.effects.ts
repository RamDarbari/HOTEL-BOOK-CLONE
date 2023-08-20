// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { filterHotels, loadHotelsSuccess } from './hotels.actions';
// import { map, switchMap, withLatestFrom } from 'rxjs/operators';
// import { Store } from '@ngrx/store';
// import { selectHotels } from './hotels.selectors';
// import { HotelsState } from './hotels.state';

// @Injectable()
// export class HotelsEffects {
//   constructor(private actions$: Actions, private store: Store<HotelsState>) {}

//   filterHotels$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(filterHotels),
//       withLatestFrom(this.store.select(selectHotels)),
//       switchMap(([action, hotels]) => {
//         const filteredHotels = hotels.filter(
//           (hotel) => hotel.city === action.city
//         );
//         return [loadHotelsSuccess({ hotels: filteredHotels })];
//       })
//     )
//   );
// }
