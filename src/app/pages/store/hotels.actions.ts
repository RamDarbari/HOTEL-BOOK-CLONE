import { createAction, props } from '@ngrx/store';
import { hotels } from 'src/app/data';

export const loadHotels = createAction('[Hotel] Load Hotels');
export const loadHotelsSuccess = createAction(
  '[Hotel] Load Hotels Success',
  props<{ allHotels: hotels[] }>()
);
export const loadHotelsFailure = createAction(
  '[Hotel] Load Hotels Failure',
  props<{ error: any }>()
);

export const filterHotels = createAction(
  '[Hotel] Filter Hotels',
  props<{ filters: hotels }>()
);

export const setFilterAndDates = createAction(
  '[Hotel] Set Filter and Dates',
  props<{
    city: string;
    guests: number;
    checkInDate: Date | null;
    checkOutDate: Date | null;
  }>()
);
export const someErrorAction = createAction(
  '[Hotel] Some Error',
  props<{ error: any }>()
);
