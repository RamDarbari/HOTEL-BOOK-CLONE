import { createReducer, on } from '@ngrx/store';
import * as action from './hotels.actions';
import { HotelsState, initialHotelsState } from './hotels.state';

export const hotelsReducer = createReducer(
  initialHotelsState,
  on(action.loadHotelsSuccess, (state, { allHotels }) => {
    return {
      ...state,
      allHotels,
    };
  }),
  on(
    action.setFilterAndDates,
    (state, { city, guests, checkInDate, checkOutDate }) => {
      return {
        ...state,
        selectedCity: city,
        selectedGuests: guests,
        checkInDate,
        checkOutDate,
      };
    }
  )
);
