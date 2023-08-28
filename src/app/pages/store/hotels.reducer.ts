import { createReducer, on } from '@ngrx/store';
import * as action from './hotels.actions';
import { HotelsState, initialHotelsState } from './hotels.state';

export const hotelsReducer = createReducer(
  initialHotelsState,
  on(action.loadHotelsSuccess, (state, { hotels }) => {
    return {
      ...state,
      hotels,
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
