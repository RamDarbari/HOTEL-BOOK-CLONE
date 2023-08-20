import { createSelector, createFeatureSelector } from '@ngrx/store';
import { HotelsState } from './hotels.state';

const selectHotelsFeature = createFeatureSelector<HotelsState>('hotels');

export const selectHotels = createSelector(
  selectHotelsFeature,
  (state) => state.filteredHotels
);
