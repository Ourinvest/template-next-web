import { createSchema, createYoga } from 'graphql-yoga';

const schema = createSchema({
	typeDefs: /*GraphQL*/ `
        type Query {
            up: String!
        }
    `,
	resolvers: {
		Query: {
			up: () => 'Success!',
		},
	},
});

const { handleRequest } = createYoga({
	graphqlEndpoint: '/graphql',
	fetchAPI: {
		Request: Request,
		Response: Response,
	},
	schema,
});

export { handleRequest as GET, handleRequest as POST };
