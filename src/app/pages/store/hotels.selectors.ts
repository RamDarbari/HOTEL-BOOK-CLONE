import { createSelector, createFeatureSelector } from '@ngrx/store';
import { HotelsState } from './hotels.state';
import { hotels } from 'src/app/data';

const selectHotelState = createFeatureSelector<HotelsState>('hotel');

export const selectHotels = createSelector(selectHotelState, (state) => {
  debugger;
  return state.allHotels;
});
