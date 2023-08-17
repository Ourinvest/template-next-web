/* eslint-disable no-console */
import 'reflect-metadata';

import { createYoga } from 'graphql-yoga';
import { buildSchema } from 'type-graphql';
import Container from 'typedi';

import { TodoResolver } from '@/server/resolvers/todo';
import { UpResolver } from '@/server/resolvers/up';

const { handleRequest } = createYoga({
	context: ({ params }) => console.log(params),
	fetchAPI: {
		Request: Request,
		Response: Response,
	},
	graphqlEndpoint: '/graphql',
	logging: {
		debug: (...arguments_) => {
			console.log(arguments_);
		},
		error: (...arguments_) => {
			console.error(arguments_);
		},
		info: (...arguments_) => {
			console.info(arguments_);
		},
		warn: (...arguments_) => {
			console.warn(arguments_);
		},
	},
	schema: async () =>
		await buildSchema({
			resolvers: [UpResolver, TodoResolver],
			container: Container,
			validate: true,
		}),
});

export { handleRequest as GET, handleRequest as POST };
