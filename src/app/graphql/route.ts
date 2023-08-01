import 'reflect-metadata';

import { LoggerInterceptor } from '@/server/middlewares/error-interceptor';
import { UpResolver } from '@/server/resolvers/up';
import { createYoga } from 'graphql-yoga';
import { buildSchema } from 'type-graphql';

const { handleRequest } = createYoga({
	graphqlEndpoint: '/graphql',
	fetchAPI: {
		Request: Request,
		Response: Response,
	},
	schema: async () =>
		await buildSchema({
			resolvers: [UpResolver],
			globalMiddlewares: [LoggerInterceptor],
		}),
});

export { handleRequest as GET, handleRequest as POST };
