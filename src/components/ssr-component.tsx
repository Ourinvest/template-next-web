/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-console */
import React from 'react';

import { getExchangeList } from '@/app/redux/features/exchange/exchange-thunk';
import { store } from '@/app/redux/store';

import ExchangeList from './exchange-list';
const SSRCompoment = (): React.JSX.Element => {
	void store.dispatch(getExchangeList(''));
	return <ExchangeList exchanges={store.getState().exchange.exchanges} />;
};

export default SSRCompoment;
