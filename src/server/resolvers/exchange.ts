/* eslint-disable no-console */
import { Query, Resolver } from 'type-graphql';

import exchanges from '@/app/api/exchanges.json';
import type { IExchange } from '@/interfaces/interface-exchange';

import { Exchange } from '../entities/exchange';

@Resolver()
export class ExchangeResolver {
	@Query(() => [Exchange])
	getExchanges(): IExchange[] {
		return exchanges;
	}
}
