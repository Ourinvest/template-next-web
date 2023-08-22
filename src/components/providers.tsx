'use client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@/app/redux/store';

import Preloader from './preloader';

const Providers = ({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element => {
	return (
		<Provider store={store}>
			<Preloader />
			<PersistGate loading={<p>Loading</p>} persistor={persistor}>
				{children}
			</PersistGate>
		</Provider>
	);
};

export default Providers;
