import 'reflect-metadata';

import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Todo {
	@Field(() => Boolean)
	completed: boolean;

	@Field()
	id: number;

	@Field()
	title: string;

	@Field()
	userId: number;
}
