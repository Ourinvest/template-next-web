import 'reflect-metadata';

/* eslint-disable react-hooks/rules-of-hooks */
import { useEngine, useLogger } from '@envelop/core';
import { useResponseCache } from '@envelop/response-cache';
import { execute, parse, specifiedRules, subscribe, validate } from 'graphql';
import { createYoga } from 'graphql-yoga';
import { buildSchema } from 'type-graphql';
import Container from 'typedi';

import { TodoResolver } from '@/server/resolvers/todo';
import { UpResolver } from '@/server/resolvers/up';

const { handleRequest } = createYoga({
	context: ({ params }) => console.info(params),
	fetchAPI: {
		Request,
		Response,
	},
	graphqlEndpoint: '/graphql',
	logging: {
		debug: (...parameters) => {
			console.info(parameters);
		},
		error: (...parameters) => {
			console.error(parameters);
		},
		info: (...parameters) => {
			console.info(parameters);
		},
		warn: (...parameters) => {
			console.warn(parameters);
		},
	},
	schema: async () =>
		buildSchema({
			resolvers: [UpResolver, TodoResolver],
			container: Container,
			validate: true,
		}),
	plugins: [
		useEngine({ parse, validate, specifiedRules, execute, subscribe }),
		useResponseCache({ session: () => Object.create(null) as null }),
		useLogger({
			logFn: (eventName, parameters) => {
				console.info(eventName, JSON.stringify(parameters));
			},
		}),
	],
});

export { handleRequest as GET, handleRequest as POST };
