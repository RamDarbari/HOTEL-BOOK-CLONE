import { createReducer, on } from '@ngrx/store';
import * as action from './auth.actions';
import { initialAuthState } from './auth.state';

export const authReducer = createReducer(
  initialAuthState,
  on(action.loginSuccess, (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    user,
  })),
  on(action.loginFailure, (state, { error }) => ({
    ...state,
    isAuthenticated: false,
    error,
  })),
  on(action.signupSuccess, (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    user,
  })),
  on(action.signupFailure, (state, { error }) => ({
    ...state,
    isAuthenticated: false,
    error,
  }))
);
