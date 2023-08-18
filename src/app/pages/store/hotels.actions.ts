import { createAction, props } from '@ngrx/store';
import { hotels } from 'src/app/data';

export const loadHotelsSuccess = createAction(
  '[Hotels/API] Load Hotels Success',
  props<{ hotels: hotels[] }>()
);

// export const filterHotels = createAction(
//   '[filteredHotel] Filter Hotels',
//   props<{ location: string }>()
// );

// export const filteredHotelsLoaded = createAction(
//   '[filteredHotel] Filtered Hotels Loaded',
//   props<{ filteredHotels: hotels[] }>()
// );

// export const filterHotelsError = createAction(
//   '[filteredHotel] Filter Hotels Error',
//   props<{ error: any }>()
// );
