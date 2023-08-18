import 'reflect-metadata';

import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Todo {
	@Field(() => Boolean)
	completed: boolean;

	@Field(() => Int)
	id: number;

	@Field()
	title: string;

	@Field(() => Int)
	userId: number;
}
