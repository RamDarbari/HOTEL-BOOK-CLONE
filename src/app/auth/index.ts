import { MetaReducer } from '@ngrx/store';
import { hydrationMetaReducer } from './store/hydration.reducer';

export const metaReducers: MetaReducer[] = [hydrationMetaReducer];
