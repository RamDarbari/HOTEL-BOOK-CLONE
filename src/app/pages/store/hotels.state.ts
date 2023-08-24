import { hotels } from 'src/app/data';

export interface HotelsState {
  allHotels: hotels[];
  selectedCity: string | null;
  selectedGuests: number | null;
  checkInDate: Date | null;
  checkOutDate: Date | null;
}

// Initial state
export const initialHotelsState: HotelsState = {
  allHotels: [],
  selectedCity: null,
  selectedGuests: null,
  checkInDate: null,
  checkOutDate: null,
};
