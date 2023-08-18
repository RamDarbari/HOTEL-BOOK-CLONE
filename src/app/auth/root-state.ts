import { AuthState } from './store/auth.state'; // Import your actual feature state

export interface RootState {
  auth: AuthState; // Replace 'AuthState' with your actual feature state interface
  // Add more feature states as needed
}

// Initial state for the root state
export const initialRootState: RootState = {
  auth: {
    user: null,
    error: null,
    isLoading: false,
  }, // Replace with the initial state of your actual feature state
  // Initialize other feature states as needed
};
