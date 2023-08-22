/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/template-indent */
import type { DocumentNode } from '@apollo/client';
import { gql } from '@apollo/client';

export const GET_EXCHANGES = (arguments_: {
	name: string | null;
}): { query: DocumentNode; variables: { name: string | null } } => ({
	query: gql`
		query {
			getExchanges {
				id
			}
		}
	`,
	variables: {
		name: arguments_.name,
	},
});
