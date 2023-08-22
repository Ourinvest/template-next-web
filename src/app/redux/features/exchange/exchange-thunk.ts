/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable no-console */
import type { ApolloQueryResult } from '@apollo/client';
import { createAsyncThunk } from '@reduxjs/toolkit';

import apolloClient from '@/app/api/apollo-client';
import { GET_EXCHANGES } from '@/app/queries/queries';
import type {
	ExchangeResponse,
	IExchange,
} from '@/interfaces/interface-exchange';

export const getExchangeList = createAsyncThunk(
	'exchange/getExchangesList',
	async (name: string, { rejectWithValue }): Promise<IExchange[] | unknown> => {
		try {
			const { data }: ApolloQueryResult<ExchangeResponse> =
				await apolloClient.query(GET_EXCHANGES({ name: name }));
			return data.getExchanges;
		} catch (error) {
			console.log('error', error);
			return rejectWithValue(error);
		}
	},
);
