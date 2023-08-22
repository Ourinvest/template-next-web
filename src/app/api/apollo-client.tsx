import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'http://localhost:3000//graphql',
	cache: new InMemoryCache(),
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
	defaultOptions: {
		query: {
			fetchPolicy: 'no-cache',
		},
		watchQuery: {
			fetchPolicy: 'no-cache',
		},
	},
});
const apolloClient = client;
export default apolloClient;
