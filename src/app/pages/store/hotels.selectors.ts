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

const getFilterCriteria = createSelector(
  getHotelState,
  (state) => state.filterCriteria
);

export const getFilteredHotelsWithCriteria = createSelector(
  getFilteredHotels,
  getFilterCriteria,
  (hotels, filterCriteria) => {
    if (!filterCriteria) {
      return hotels; // If no filter criteria, return the original list
    }

    // Implement your filtering logic here based on filterCriteria
    // For example, filter hotels based on location, dates, guests
    // Return the filtered list of hotels

    if (filterCriteria.location) {
      const filteredHotels = hotels.filter((hotel) => {
        // Assuming the hotel object has a 'city' property
        return hotel.city === filterCriteria.location;
      });

      return filteredHotels;
    }

    return hotels; // Return unfiltered hotels if no location filter is applied
  }
);
