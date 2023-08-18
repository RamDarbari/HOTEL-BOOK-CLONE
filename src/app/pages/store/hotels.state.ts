import { hotels } from 'src/app/data';

export interface HotelState {
  filteredHotels: hotels[];
  error: any;
  filterCriteria: {
    location: string;
    checkInDate: Date;
    checkOutDate: Date;
    guests: number;
  };
}

export const initialState: HotelState = {
  filteredHotels: [],
  error: null,
  filterCriteria: {
    location: '',
    checkInDate: new Date(),
    checkOutDate: new Date(),
    guests: 1,
  },
};
