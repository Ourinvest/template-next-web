import 'reflect-metadata';

import { createYoga } from 'graphql-yoga';
import { buildSchema } from 'type-graphql';

import { ExchangeResolver } from '@/server/resolvers/exchange';
import { UpResolver } from '@/server/resolvers/up';

const { handleRequest } = createYoga({
	graphqlEndpoint: '/graphql',
	fetchAPI: {
		Request: Request,
		Response: Response,
	},
	schema: async () =>
		await buildSchema({
			resolvers: [UpResolver, ExchangeResolver],
		}),
});
export { handleRequest as GET, handleRequest as POST };
