// import { createReducer, on } from '@ngrx/store';
// import * as HotelActions from './hotels.actions';
// import { hotels } from 'src/app/data';
// import { initialState1 } from './hotels.state';

// export const hotelReducer = createReducer(
//   initialState1,
//   on(HotelActions.filterHotels, (state, { location }) => ({
//     ...state,
//     filteredHotels: [],
//     error: null,
//   })),
//   on(HotelActions.filteredHotelsLoaded, (state, { filteredHotels }) => ({
//     ...state,
//     filteredHotels,
//   })),
//   on(HotelActions.filterHotelsError, (state, { error }) => ({
//     ...state,
//     error,
//   }))
// );

import { createReducer, on } from '@ngrx/store';
import { loadHotelsSuccess } from './hotels.actions';
import { hotels } from 'src/app/data';

export const initialState: hotels[] = [];

export const hotelReducer = createReducer(
  initialState,
  on(loadHotelsSuccess, (state, { hotels }) => [...hotels])
);
