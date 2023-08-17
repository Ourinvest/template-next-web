import 'reflect-metadata';

import { createYoga } from 'graphql-yoga';
import { buildSchema } from 'type-graphql';
import Container from 'typedi';

import { TodoResolver } from '@/server/resolvers/todo';
import { UpResolver } from '@/server/resolvers/up';

const { handleRequest } = createYoga({
	graphqlEndpoint: '/graphql',
	fetchAPI: {
		Request: Request,
		Response: Response,
	},
	schema: async () =>
		await buildSchema({
			resolvers: [UpResolver, TodoResolver],
			container: Container,
			validate: true,
		}),
});

export { handleRequest as GET, handleRequest as POST };
