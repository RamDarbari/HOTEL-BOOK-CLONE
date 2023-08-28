import { createSelector, createFeatureSelector } from '@ngrx/store';
import { HotelsState } from './hotels.state';
import { hotels } from 'src/app/data';
import { state } from '@angular/animations';

const selectHotelState = createFeatureSelector<HotelsState>('hotel');

export const selectHotels = createSelector(selectHotelState, (state) => {
  return state.hotels;
});

export const filterCheckInDate = createSelector(selectHotelState, (state) => {
  return state.checkInDate;
});

export const filterCheckOutDate = createSelector(selectHotelState, (state) => {
  return state.checkOutDate;
});
