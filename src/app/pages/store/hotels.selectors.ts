import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HotelState } from './hotels.state';

const getHotelState = createFeatureSelector<HotelState>('hotel');

export const getFilteredHotels = createSelector(
  getHotelState,
  (state) => state.filteredHotels
);

export const getFilterError = createSelector(
  getHotelState,
  (state) => state.error
);
