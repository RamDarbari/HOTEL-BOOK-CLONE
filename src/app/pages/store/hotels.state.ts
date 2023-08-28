import { hotels } from 'src/app/data';

export interface HotelsState {
  hotels: hotels[];
  selectedCity: string | null;
  selectedGuests: number | null;
  checkInDate: Date | null;
  checkOutDate: Date | null;
}

// Initial state
export const initialHotelsState: HotelsState = {
  hotels: [],
  selectedCity: null,
  selectedGuests: null,
  checkInDate: null,
  checkOutDate: null,
};
