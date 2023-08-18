/* eslint-disable unicorn/no-null */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-console */
import 'reflect-metadata';

import { useEngine, useLogger } from '@envelop/core';
import { useResponseCache } from '@envelop/response-cache';
import { execute, parse, specifiedRules, subscribe, validate } from 'graphql';
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
	plugins: [
		useEngine({ parse, validate, specifiedRules, execute, subscribe }),
		useResponseCache({ session: () => null }),
		useLogger({
			logFn: (eventName, arguments_) => {
				console.log(eventName, JSON.stringify(arguments_));
			},
		}),
	],
});

export { handleRequest as GET, handleRequest as POST };
