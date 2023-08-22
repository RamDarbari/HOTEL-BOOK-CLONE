import { AuthState } from './store/auth.state'; // Import your actual feature state

export interface RootState {
  auth: AuthState;
}

// Initial state for the root state
export const initialRootState: RootState = {
  auth: {
    user: null,
    error: null,
    isLoading: false,
  },
};
