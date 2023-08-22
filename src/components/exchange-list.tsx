/* eslint-disable no-console */
import type { ApolloError } from '@apollo/client';
import React from 'react';

import type { IExchange } from '@/interfaces/interface-exchange';

interface IExchangeList {
	exchanges: IExchange[];
	errorMessage?: ApolloError;
}
function ExchangeList({
	exchanges,
	errorMessage,
}: IExchangeList): React.JSX.Element {
	return (
		<div>
			{errorMessage && <p>{errorMessage.message}</p>}
			<div>
				<h1>Exchange List</h1>
				<ul>
					{exchanges.map((exchange: IExchange) => (
						<li key={exchange.id}>{exchange.id}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default ExchangeList;
