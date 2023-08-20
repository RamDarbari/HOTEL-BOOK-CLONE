import { createAction, props } from '@ngrx/store';
import { hotels } from 'src/app/data';

export const loadHotels = createAction('[Hotels] Load Hotels');
export const loadHotelsSuccess = createAction(
  '[Hotels/API] Load Hotels Success',
  props<{ hotels: hotels[] }>()
);
export const filterHotels = createAction(
  '[Hotels] Filter Hotels',
  props<{ city: string }>()
);
