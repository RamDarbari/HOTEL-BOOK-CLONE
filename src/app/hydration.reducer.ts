import { ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { RootState } from './auth/root-state';
import { AuthState } from './auth/store/auth.state';

export const hydrationMetaReducer = (
  reducer: ActionReducer<RootState>
): ActionReducer<RootState> => {
  return (state = {} as RootState, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = localStorage.getItem('state');
      if (storageValue) {
        try {
          const parsedState = JSON.parse(storageValue);
          if (parsedState && parsedState.auth && parsedState.auth.user) {
            const authState: AuthState = {
              ...(state.auth || {}),
              user: parsedState.auth.user,
            };
            parsedState.auth = authState;
            // Exclude the 'hotels' part from the parsed state
            const nextStateWithoutHotels = {
              ...parsedState,
              hotels: undefined,
            };
            return nextStateWithoutHotels;
          } else {
            return { ...parsedState, auth: undefined, hotels: undefined };
          }
        } catch {
          localStorage.removeItem('state');
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem('state', JSON.stringify(nextState));
    return nextState;
  };
};
