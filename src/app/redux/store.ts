import type {
	AnyAction,
	Dispatch,
	EmptyObject,
	ThunkDispatch,
} from '@reduxjs/toolkit';
import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { useDispatch as useStoreDispatch } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import type { PersistPartial } from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import type { AppState } from './reducer';
import { rootReducer } from './reducer';

const middlewareEnhancer = applyMiddleware(thunk);
const preloadedState: AppState = {} as AppState;
const persistConfig = {
	key: 'nextjs',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
	preloadedState,
	enhancers: [middlewareEnhancer],
});

export type RootState = ReturnType<typeof store.getState>;
export const useAsyncDispatch = (): ThunkDispatch<
	EmptyObject & AppState & PersistPartial,
	undefined,
	AnyAction
> &
	Dispatch<AnyAction> => useStoreDispatch<typeof store.dispatch>();
export const persistor = persistStore(store);
