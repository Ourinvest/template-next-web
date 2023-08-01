import 'reflect-metadata';

import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Up {
	@Field()
	message: string;
}
