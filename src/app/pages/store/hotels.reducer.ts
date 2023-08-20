import { createReducer, on } from '@ngrx/store';
import { loadHotelsSuccess, filterHotels } from './hotels.actions';
import { HotelsState } from './hotels.state';

const initialState: HotelsState = {
  hotels: [],
  filteredHotels: [],
};

export const hotelsReducer = createReducer(
  initialState,
  on(loadHotelsSuccess, (state, { hotels }) => ({
    ...state,
    hotels,
    filteredHotels: hotels,
  })),
  on(filterHotels, (state, { city }) => ({
    ...state,
    filteredHotels: state.hotels.filter((hotel) => hotel.city === city),
  }))
);
