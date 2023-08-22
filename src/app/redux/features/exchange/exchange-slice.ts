/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';

import type { IExchange } from '@/interfaces/interface-exchange';
import type { IRequestStatus } from '@/interfaces/interface-request-status';

import { getExchangeList } from './exchange-thunk';
export interface ExchangeState {
	exchanges: IExchange[];
	getStatus: IRequestStatus;
}

export const initialExchangeState: ExchangeState = {
	exchanges: [],
	getStatus: 'idle',
};

const excahngeSlice = createSlice({
	name: 'exchange',
	initialState: initialExchangeState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getExchangeList.fulfilled, (state, action) => {
			state.getStatus = 'success';
			state.exchanges = action.payload as IExchange[];
		});
	},
});

export default excahngeSlice;
