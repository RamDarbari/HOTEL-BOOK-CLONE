import { createReducer, on } from '@ngrx/store';
import { loadHotelsSuccess, applyFilter } from './hotels.actions';
import { hotels } from 'src/app/data';

export const initialState: hotels[] = [];
export const initialFilterCriteria = {
  location: '',
  checkInDate: new Date(),
  checkOutDate: new Date(),
  guests: 1,
};

export const hotelReducer = createReducer(
  { filteredHotels: initialState, filterCriteria: initialFilterCriteria },
  on(loadHotelsSuccess, (state, { hotels }) => ({
    ...state,
    filteredHotels: hotels,
  })),
  on(applyFilter, (state, { filterCriteria }) => ({
    ...state,
    filterCriteria,
  }))
);
