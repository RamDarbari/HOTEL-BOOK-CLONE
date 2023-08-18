import { hotels } from 'src/app/data';

export interface HotelState {
  filteredHotels: hotels[];
  error: any;
}

export const initialState1: HotelState = {
  filteredHotels: [],
  error: null,
};
