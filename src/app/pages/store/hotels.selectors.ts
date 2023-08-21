import { createSelector, createFeatureSelector } from '@ngrx/store';
import { HotelsState } from './hotels.state';

const selectHotelState = createFeatureSelector<HotelsState>('hotel');

export const selectHotels = createSelector(selectHotelState, (state) => {
  return state.hotels;
});
