import { combineReducers } from 'redux';

import type { ExchangeState } from './features/exchange/exchange-slice';
import excahngeSlice from './features/exchange/exchange-slice';

export interface AppState {
	exchange: ExchangeState;
}

export const rootReducer = combineReducers<AppState>({
	exchange: excahngeSlice.reducer,
});
