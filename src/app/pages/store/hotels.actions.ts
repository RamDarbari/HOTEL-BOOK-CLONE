import { createAction, props } from '@ngrx/store';
import { hotels } from 'src/app/data';

export const applyFilter = createAction(
  '[Hotels] Apply Filter',
  props<{ filterCriteria: any }>()
);

export const loadHotelsSuccess = createAction(
  '[Hotels/API] Load Hotels Success',
  props<{ hotels: hotels[] }>()
);
