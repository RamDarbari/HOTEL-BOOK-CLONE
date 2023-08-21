import { createReducer, on } from '@ngrx/store';
import * as action from './hotels.actions';
import { HotelsState } from './hotels.state';

const initialState: HotelsState = {
  hotels: [],
};

export const hotelsReducer = createReducer(
  initialState,
  on(action.loadHotelsSuccess, (state, { hotels }) => {
    return {
      ...state,
      hotels,
    };
  })
);
